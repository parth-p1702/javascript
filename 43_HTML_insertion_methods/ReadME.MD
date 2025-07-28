# 🧩 HTML Insertion Methods in JavaScript

This guide covers various methods to insert or manipulate HTML content using JavaScript.

---

## 🔹 1. `innerHTML`

Replaces the entire content of an element, including child elements.

```javascript
document.getElementById("demo").innerHTML = "<h2>Hello, World!</h2>";
```

⚠️ Overwrites all existing content inside the element.

---

## 🔹 2. `innerText` / `textContent`

- `innerText`: Inserts **plain text** (ignores HTML formatting).
- `textContent`: Similar to `innerText` but faster and more consistent.

```javascript
document.getElementById("demo").innerText = "<b>This is bold</b>";
```

---

## 🔹 3. `insertAdjacentHTML(position, text)`

Inserts HTML at a specific position relative to the element.

### Positions:
- `"beforebegin"` – Before the element itself
- `"afterbegin"` – Just inside the element, before its first child
- `"beforeend"` – Just inside the element, after its last child
- `"afterend"` – After the element itself

```javascript
let element = document.getElementById("demo");
element.insertAdjacentHTML("beforeend", "<p>Appended paragraph</p>");
```

---

## 🔹 4. `append()` / `appendChild()`

Adds nodes or strings to the **end** of the element.

```javascript
let p = document.createElement("p");
p.textContent = "This is appended!";
document.getElementById("demo").appendChild(p);
```

```javascript
document.getElementById("demo").append("Appended Text");
```

---

## 🔹 5. `prepend()`

Inserts content at the **beginning** of the element.

```javascript
let span = document.createElement("span");
span.textContent = "Start: ";
document.getElementById("demo").prepend(span);
```

---

## 🔹 6. `outerHTML`

Replaces the **entire element**, not just its contents.

```javascript
document.getElementById("demo").outerHTML = "<div id='demo'>Replaced Element</div>";
```

---

## ✅ Example HTML + JavaScript

```html
<div id="demo">Original Content</div>

<script>
  document.getElementById("demo").innerHTML = "<strong>New Content</strong>";
</script>
```

---

