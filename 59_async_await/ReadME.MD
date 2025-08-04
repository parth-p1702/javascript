
# ⏳ JavaScript Async/Await

**Async/Await** is a modern way to write asynchronous code in JavaScript. It makes code that uses Promises easier to read and write, using a syntax that looks like synchronous code.

---

## 🧠 What Is `async` and `await`?

- `async` is used to declare a function that returns a Promise.
- `await` is used inside `async` functions to pause execution until the Promise is resolved.

---

## ✅ Basic Example

```javascript
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

fetchData();
```

---

