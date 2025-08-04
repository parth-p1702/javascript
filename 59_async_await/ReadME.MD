
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

## 🔄 Error Handling with `try...catch`

```javascript
async function fetchUser() {
  try {
    let response = await fetch('https://api.example.com/user');
    let user = await response.json();
    console.log(user);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## 📌 Points to Remember

- `await` can only be used inside `async` functions.
- It pauses the function until the Promise resolves.
- Makes asynchronous code easier to understand and maintain.

---

## 🆚 Promise vs Async/Await

| Feature       | Promise                           | Async/Await                      |
|---------------|-----------------------------------|----------------------------------|
| Syntax        | `.then()`, `.catch()`             | `async`, `await`, `try...catch` |
| Readability   | Can get nested (callback-like)    | Cleaner and easier to follow    |
| Error Handling| `.catch()`                        | `try...catch`                   |

---

📚 Use `async/await` for writing clean and readable asynchronous JavaScript!
