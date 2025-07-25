
# 🌐 JavaScript: DOM, BOM, and Window Object

This guide explains the differences and roles of **DOM (Document Object Model)**, **BOM (Browser Object Model)**, and the **Window Object** in JavaScript.

---

## 📄 1. DOM (Document Object Model)

The **DOM** represents the structure of an HTML document as a **tree of objects**. JavaScript can use the DOM to **access, modify, or delete HTML elements** dynamically.

### 📌 Example:
```html
<p id="demo">Hello World!</p>

<script>
  document.getElementById("demo").innerHTML = "Changed Text!";
</script>
```

### ✅ Common DOM Methods:
| Method                     | Description                        |
|----------------------------|------------------------------------|
| `getElementById()`         | Selects an element by ID           |
| `getElementsByClassName()` | Selects elements by class name     |
| `querySelector()`          | Selects the first matching element |
| `createElement()`          | Creates a new HTML element         |
| `appendChild()`            | Adds an element to the DOM         |

---

## 🌍 2. BOM (Browser Object Model)

The **BOM** allows JavaScript to interact with the **browser** outside the page content (e.g., the window, navigator, screen, history).

### ✅ Common BOM Objects:
| Object      | Description                                |
|-------------|--------------------------------------------|
| `navigator` | Information about the browser              |
| `screen`    | Info about the user's screen               |
| `location`  | URL of the current page                    |
| `history`   | Browser history navigation                 |
| `alert()`   | Display alert boxes                        |
| `confirm()` | Confirm dialog                             |
| `prompt()`  | Input dialog                               |

### 📌 Example:
```javascript
alert("This is part of BOM!");
console.log("Current URL: " + window.location.href);
```

---

## 🪟 3. Window Object

The **Window Object** is the **global object** in the browser environment. All global JavaScript objects, functions, and variables become members of the `window` object.

### ✅ Examples:
```javascript
window.alert("Hello from the window object!");

let a = 10;
console.log(window.a); // 10

console.log(window.innerHeight); // Height of the browser window
```

### 🔹 Common Properties/Methods:
| Property / Method     | Description                                 |
|------------------------|---------------------------------------------|
| `window.innerWidth`   | Width of the window’s content area          |
| `window.innerHeight`  | Height of the window’s content area         |
| `window.open()`       | Opens a new browser window                  |
| `window.setTimeout()` | Calls a function after a delay              |
| `window.document`     | Refers to the DOM                           |

---

## 🔁 Relationship Summary

- **Window** object is the **global container**.
- **DOM** is accessible via `window.document`.
- **BOM** includes `navigator`, `screen`, `location`, etc., also under `window`.

```text
 window
  ├── document (DOM)
  ├── location (BOM)
  ├── navigator (BOM)
  ├── alert(), prompt(), confirm()
  └── setTimeout(), setInterval()
```

---

## 📝 Conclusion

| Feature | DOM                         | BOM                           | Window Object             |
|---------|------------------------------|--------------------------------|---------------------------|
| Role    | Interact with HTML Document | Interact with browser features | Global environment object |
| Access  | `document`                  | `navigator`, `location`, etc. | `window`                  |
| Example | `document.getElementById()` | `alert()`, `console.log()`     | `window.alert()`          |

