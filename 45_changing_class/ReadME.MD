
# 🧠 Ways to Change Class in JavaScript

There are multiple ways to manipulate classes in JavaScript. Below are the most common and effective methods:

---

## 🔹 1. `element.className`

Set or get the **entire class attribute** as a string.

```javascript
document.getElementById("box").className = "new-class another-class";
```

⚠️ **Note:** This replaces **all existing classes** on the element.

---

## 🔹 2. `element.classList`

`classList` provides more control with built-in methods:

### ✅ `add()`
Adds a class without removing existing ones.

```javascript
document.getElementById("box").classList.add("highlight");
```

### ✅ `remove()`
Removes a specific class.

```javascript
document.getElementById("box").classList.remove("highlight");
```

### ✅ `toggle()`
Adds the class if it’s not there; removes it if it is.

```javascript
document.getElementById("box").classList.toggle("active");
```

### ✅ `contains()`
Checks if a class exists.

```javascript
if (document.getElementById("box").classList.contains("active")) {
  console.log("Box is active");
}
```

---

## ✅ Example HTML + JavaScript

```html
<div id="box" class="card">This is a box</div>
<button onclick="changeClass()">Change Class</button>

<script>
  function changeClass() {
    const box = document.getElementById("box");
    box.classList.toggle("highlight");
  }
</script>
```

