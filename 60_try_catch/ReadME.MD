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

| Feature       | Promise                    | Async/Await                      |
|---------------|----------------------------|----------------------------------|
| Syntax        | `.then()`, `.catch()`      | `async`, `await`, `try...catch`  |
| Readability   | Can get nested(callback)   | Cleaner and easier to follow     |
| Error Handling| `.catch()`                 | `try...catch`                    |

---

📚 Use `async/await` for writing clean and readable asynchronous JavaScript!
