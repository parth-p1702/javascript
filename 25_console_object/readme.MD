# 🧰 JavaScript `console` Object – Quick Guide

The `console` object in JavaScript is used to **display messages**, **debug code**, and **track values** during program execution in the browser's developer console.

🧪 Open the browser → Press `F12` or `Ctrl + Shift + I` → Go to the **Console** tab.

---

## ✅ Why Use `console`?

- Debug your code (find and fix errors)
- Display values or messages during development
- Log warnings and errors
- Measure performance

---

## 🛠 Common `console` Methods

| Method                | Description                                  |
|-----------------------|----------------------------------------------|
| `console.log()`       | Logs general messages                        |
| `console.error()`     | Displays error messages in red               |
| `console.warn()`      | Displays warnings in yellow                  |
| `console.info()`      | Logs informational messages (like `log`)     |
| `console.table()`     | Displays tabular data (arrays/objects)       |
| `console.clear()`     | Clears the console                           |
| `console.time()` / `console.timeEnd()` | Measures time between calls |
| `console.group()` / `console.groupEnd()` | Group logs together       |

---

## 🔍 Examples

### `console.log()`

```javascript
let name = "Parth";
console.log("Hello " + name); // Hello Parth
