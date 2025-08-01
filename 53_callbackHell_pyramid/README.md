
# 🕳️ Callback Hell & Pyramid of Doom in JavaScript

**Callback Hell** (also known as the **Pyramid of Doom**) is a term used to describe **deeply nested callbacks** in asynchronous JavaScript code. It leads to code that is difficult to read, maintain, and debug.

---

## 😣 What Is Callback Hell?

When multiple asynchronous operations are performed one after another using callbacks, you often end up nesting them within each other. This structure forms a **pyramid-like shape** — hence the term "Pyramid of Doom".

### Example:
```javascript
doTask1(function(result1) {
  doTask2(result1, function(result2) {
    doTask3(result2, function(result3) {
      doTask4(result3, function(result4) {
        console.log("Final Result:", result4);
      });
    });
  });
});
```
As you can see, the indentation increases with every level of nesting, making the code:
- Hard to read 😵
- Hard to debug 🐞
- Hard to maintain 🛠️

---

## ⚠️ Problems with Callback Hell

- Reduces **code readability**
- Difficult to manage **error handling**
- Increases **complexity** in understanding control flow
- Complicates testing and debugging

---

## ✅ How to Avoid Callback Hell

### 🔄 1. Named Functions

Break callbacks into separate, named functions to flatten the structure.

```javascript
function step1(result1) { doTask2(result1, step2); }
function step2(result2) { doTask3(result2, step3); }
function step3(result3) { doTask4(result3, step4); }
function step4(result4) { console.log("Final:", result4); }

doTask1(step1);
```

### 🧪 2. Using Promises

Promises help handle asynchronous flow in a more linear and readable way.

```javascript
doTask1()
  .then(doTask2)
  .then(doTask3)
  .then(doTask4)
  .then(result => console.log("Final:", result))
  .catch(error => console.error("Error:", error));
```

### ⚡ 3. Using Async/Await (ES2017+)

With `async`/`await`, asynchronous code looks and behaves like synchronous code.

```javascript
async function runTasks() {
  try {
    const r1 = await doTask1();
    const r2 = await doTask2(r1);
    const r3 = await doTask3(r2);
    const r4 = await doTask4(r3);
    console.log("Final:", r4);
  } catch (error) {
    console.error("Error:", error);
  }
}

runTasks();
```

---

## 🧠 Pyramid of Doom Visual

```
doTask1(function() {
  doTask2(function() {
    doTask3(function() {
      doTask4(function() {
        // ...and so on
      });
    });
  });
});
```

➡️ Each level adds another layer of nesting.

---
