
# 🔗 Promise Chaining in JavaScript Using `.then()`

**Promise chaining** is a technique where multiple asynchronous operations are performed sequentially using the `.then()` method. Each `.then()` receives the result from the previous one, enabling a smooth, readable async workflow.

---

## 🚀 What Is a Promise?

A **Promise** represents a value that may be available now, or in the future, or never.

### Basic Syntax:
```javascript
let promise = new Promise((resolve, reject) => {
  // async operation
});
```

---

## 🔄 Chaining with `.then()`

Each `.then()` returns a **new promise**, allowing you to chain multiple operations.

### Example:
```javascript
doTask1()
  .then(result1 => {
    console.log("Task 1 Complete:", result1);
    return doTask2(result1);
  })
  .then(result2 => {
    console.log("Task 2 Complete:", result2);
    return doTask3(result2);
  })
  .then(result3 => {
    console.log("All Done:", result3);
  })
  .catch(error => {
    console.error("Error in chain:", error);
  });
```

---

## 🧠 How It Works

- Each `.then()` waits for the previous promise to **resolve**.
- The value returned in one `.then()` becomes the input for the next.
- If any promise **rejects**, the `.catch()` block is triggered.

---

## ❌ Without Chaining (Nested Promises)
```javascript
doTask1().then(result1 => {
  doTask2(result1).then(result2 => {
    doTask3(result2).then(result3 => {
      console.log("Done", result3);
    });
  });
});
```
➡️ Looks like callback hell. Avoid nesting!

---

## ✅ With Chaining (Flat Structure)
```javascript
doTask1()
  .then(doTask2)
  .then(doTask3)
  .then(result => {
    console.log("Done:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

---

## 🧪 Example: Sequential API Simulation
```javascript
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve("User Data"), 1000);
  });
}

function fetchPosts(userData) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${userData} → Posts`), 1000);
  });
}

fetchUser()
  .then(fetchPosts)
  .then(data => console.log("Result:", data));
```

➡️ Output (after 2s):
```
Result: User Data → Posts
```

