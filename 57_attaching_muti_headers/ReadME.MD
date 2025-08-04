
# 🧷 Attaching Multiple Handlers to a Promise in JavaScript

In JavaScript, you can attach **multiple `.then()`, `.catch()`, and `.finally()` handlers** to a single Promise. Each handler runs independently and receives the same resolved or rejected value.

---

## 🔁 Single Promise, Multiple Handlers

When a Promise is **resolved or rejected**, all handlers attached to it **after the promise settles** will still execute in the order they were added.

### Example:
```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data loaded"), 1000);
});

// First handler
promise.then(result => {
  console.log("Handler 1:", result);
});

// Second handler
promise.then(result => {
  console.log("Handler 2:", result);
});
```
➡️ Output (after 1 second):
```
Handler 1: Data loaded
Handler 2: Data loaded
```

---

## 🧠 How It Works

- All `.then()` handlers are **independent** of one another.
- If a `.then()` returns a value or throws an error, it **does not affect** the other handlers on the same base promise.
- Each `.then()` returns a **new promise**, which can be used to create a new chain.

---

## ❌ Misconception

Some assume multiple `.then()` handlers form a chain on the **same base promise**, but in fact, each one starts a **new chain**.

### Example:
```javascript
let base = new Promise(resolve => resolve("Base"));

base.then(val => {
  console.log("First then:", val);
});

base.then(val => {
  console.log("Second then:", val);
});
```

Both handlers are attached to the **same base promise**, and will run independently.

---

## 🔄 Chained vs. Parallel `.then()`

### Parallel Handlers (same base promise):
```javascript
let p = Promise.resolve("Parallel");

p.then(data => console.log("Handler A:", data));
p.then(data => console.log("Handler B:", data));
```

### Chained Handlers (each depends on previous):
```javascript
Promise.resolve("Chained")
  .then(data => {
    console.log("Handler A:", data);
    return "From A";
  })
  .then(data => {
    console.log("Handler B:", data);
  });
```

---

## 🧪 Using `.catch()` and `.finally()`

```javascript
let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

p.then(data => console.log("First:", data));
p.then(data => console.log("Second:", data));
p.catch(error => console.error("Error:", error));
p.finally(() => console.log("Always runs"));
```

---

