
# 📚 Handling Browser Events in JavaScript

Browser events allow us to make web pages interactive and dynamic. JavaScript enables developers to **respond to user actions** like clicking, typing, hovering, and more using event handlers.

---

## 🚀 What Are Browser Events?

Browser events are actions or occurrences that happen in the browser and can be captured using JavaScript.

### Common Event Types:
- `click` – When an element is clicked
- `mouseover` – When the mouse pointer moves over an element
- `mouseout` – When the pointer leaves an element
- `keydown` – When a key is pressed
- `submit` – When a form is submitted
- `load` – When a page finishes loading

---

## 🛠️ Adding Event Listeners

There are two main ways to handle events:

### 1. **Using HTML Attribute**
```html
<button onclick="sayHello()">Click Me</button>

<script>
  function sayHello() {
    alert("Hello!");
  }
</script>
```

### 2. **Using JavaScript Event Listeners**
```javascript
const btn = document.getElementById("myBtn");

btn.addEventListener("click", function () {
  alert("Button Clicked!");
});
```

---

## 📌 `addEventListener()` Syntax

```javascript
element.addEventListener(event, callbackFunction, useCapture);
```

- `event` – A string like `"click"` or `"keydown"`
- `callbackFunction` – The function to execute when the event occurs
- `useCapture` (optional) – A boolean for capturing vs. bubbling phase

---

## 🎯 Event Object

When an event occurs, the browser passes an **event object** to the callback function.

```javascript
btn.addEventListener("click", function (event) {
  console.log(event.type); // "click"
  console.log(event.target); // the clicked element
});
```

---

## 🔄 Removing Event Listeners

```javascript
function greet() {
  alert("Hi!");
}

btn.addEventListener("click", greet);

// To remove it later:
btn.removeEventListener("click", greet);
```

