
# 🔁 Introduction to Callback Functions in JavaScript

A **callback** is a function passed as an argument to another function and executed after the completion of that function. It’s a powerful technique used to handle **asynchronous operations**, such as API calls, event handling, and timers.

---

## 🚀 What Is a Callback Function?

A **callback function** is simply a function that is **called at a later time**, after another function has finished its execution.

### Example:
```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);
```
➡️ Output:
```
Hello Alice
Goodbye!
```

---

## 🧠 Why Use Callbacks?

- To ensure **code executes in the correct order**
- To handle **asynchronous tasks** like HTTP requests, file reading, etc.
- To enable **modularity and reuse** of logic

---

## ⌛ Callback in Asynchronous JavaScript

Callbacks are commonly used with functions like `setTimeout()` or `setInterval()`.

### Example:
```javascript
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);
```

---

## 📦 Named vs Anonymous Callback Functions

### Named Callback:
```javascript
function processData(data) {
  console.log("Processing:", data);
}

setTimeout(processData, 1000, "info");
```

### Anonymous Callback:
```javascript
setTimeout(function () {
  console.log("This is an anonymous callback");
}, 1000);
```

---

## 🔄 Callback Hell

When callbacks are nested within callbacks, it can lead to messy and hard-to-read code — known as **callback hell**.

```javascript
doTask1(function () {
  doTask2(function () {
    doTask3(function () {
      console.log("All tasks done!");
    });
  });
});
```
