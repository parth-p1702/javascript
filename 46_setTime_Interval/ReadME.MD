
# ⏱ JavaScript Timers: `setTimeout` & `setInterval`

JavaScript provides two powerful timing functions — `setTimeout()` and `setInterval()` — which allow you to delay execution or repeat code over time.

---

## 🔹 `setTimeout()`

`setTimeout()` is used to **execute a function once after a specified delay** (in milliseconds).

### 📌 Syntax:
```javascript
setTimeout(function, delay, param1, param2, ...);
```

### ✅ Example:
```javascript
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
```

### 💡 Key Points:
- Executes only **once** after the delay.
- Returns a `timeoutID` that can be used to cancel it using `clearTimeout()`.

### ❌ Cancel Timeout:
```javascript
const timeoutID = setTimeout(() => {
  console.log("This won't run");
}, 3000);

clearTimeout(timeoutID);
```

---

## 🔹 `setInterval()`

`setInterval()` is used to **repeatedly execute a function at fixed intervals** (in milliseconds).

### 📌 Syntax:
```javascript
setInterval(function, interval, param1, param2, ...);
```

### ✅ Example:
```javascript
setInterval(() => {
  console.log("This prints every 2 seconds");
}, 2000);
```

### 💡 Key Points:
- Runs **repeatedly** until stopped.
- Returns an `intervalID` that can be cleared using `clearInterval()`.

### ❌ Cancel Interval:
```javascript
const intervalID = setInterval(() => {
  console.log("Repeating...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalID);
  console.log("Interval stopped");
}, 5000);
```

---

