
# 📘 JavaScript Promise API

The **Promise API** in JavaScript provides a structured way to work with asynchronous code. It includes methods and properties that help manage multiple asynchronous operations with ease.

---

## 🚀 What Is a Promise?

A **Promise** represents a value that may be available now, later, or never. It is used for asynchronous operations and can be in one of three states:

- **Pending**: Initial state, neither fulfilled nor rejected  
- **Fulfilled**: Operation completed successfully  
- **Rejected**: Operation failed  

### ✅ Creating a Promise:
```javascript
let promise = new Promise((resolve, reject) => {
  // async operation
});
```

---

## 🔧 Core Promise Methods

### 1. `Promise.resolve(value)`  
Returns a Promise that is resolved with the given value.

```javascript
Promise.resolve(42).then(result => console.log(result)); // 42
```

### 2. `Promise.reject(error)`  
Returns a Promise that is rejected with the given error.

```javascript
Promise.reject("Something went wrong").catch(err => console.error(err));
```

### 3. `promise.then(onFulfilled, onRejected)`  
Handles a fulfilled or rejected result of the promise.

```javascript
promise.then(result => console.log(result), error => console.error(error));
```

### 4. `promise.catch(onRejected)`  
Handles only the rejection of the promise.

```javascript
promise.catch(error => console.error("Caught:", error));
```

### 5. `promise.finally(callback)`  
Executes code regardless of the promise outcome (fulfilled or rejected).

```javascript
promise.finally(() => console.log("Operation finished"));
```

---

## 🔗 Promise Utility Methods

### 6. `Promise.all(iterable)`  
Waits for all promises to resolve or any to reject.

```javascript
Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(error => console.error("One failed:", error));
```

### 7. `Promise.allSettled(iterable)`  
Waits for all promises to settle (either resolved or rejected). Returns an array of result objects.

```javascript
Promise.allSettled([p1, p2, p3]).then(results => console.log(results));
```

### 8. `Promise.race(iterable)`  
Returns a promise that settles as soon as any of the input promises settles (first to resolve/reject).

```javascript
Promise.race([p1, p2]).then(result => console.log("Winner:", result));
```

### 9. `Promise.any(iterable)`  
Returns the first fulfilled promise. Ignores rejections unless all fail.

```javascript
Promise.any([p1, p2, p3])
  .then(result => console.log("First success:", result))
  .catch(error => console.error("All failed:", error));
```

---


