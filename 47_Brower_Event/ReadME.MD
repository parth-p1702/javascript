# 🌐 Introduction to Browser Events in JavaScript

In web development, **events** are actions or occurrences that happen in the browser that the browser can detect and respond to.

Examples of events:
- Clicking a button (`click`)
- Moving the mouse (`mousemove`)
- Typing on the keyboard (`keydown`, `keyup`)
- Submitting a form (`submit`)
- Page loading (`load`)

---

## 🔧 What is an Event?

An **event** is a signal that something has happened — usually triggered by the user or the browser itself.

---

## 🧩 How to Handle Events in JavaScript

You can handle events using **event listeners**.

### ✅ Example: Button Click
```html
<button id="myBtn">Click Me</button>

<script>
  document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button was clicked!");
  });
</script>
