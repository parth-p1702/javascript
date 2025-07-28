# 📌 JavaScript DOM Insertion Methods: `insertAdjacentHTML`, `insertAdjacentElement`, `insertAdjacentText`

These three methods are used to insert content at specific positions relative to a DOM element.

---

## 🔹 1. `insertAdjacentHTML(position, html)`

Inserts **HTML string** at the specified position relative to the element.

### 🔸 Syntax:
```javascript
element.insertAdjacentHTML(position, htmlString);
```

### 🔸 Positions:
- `"beforebegin"` – Before the element itself
- `"afterbegin"` – Inside the element, before its first child
- `"beforeend"` – Inside the element, after its last child
- `"afterend"` – After the element itself

### 🔸 Example:
```html
<div id="container">Hello</div>

<script>
  const el = document.getElementById("container");
  el.insertAdjacentHTML("beforeend", "<p>World</p>");
</script>
```

---

## 🔹 2. `insertAdjacentElement(position, element)`

Inserts an **actual DOM element** at the specified position.

### 🔸 Syntax:
```javascript
element.insertAdjacentElement(position, newElement);
```

### 🔸 Example:
```html
<div id="container">Hello</div>

<script>
  const el = document.getElementById("container");
  const newElem = document.createElement("p");
  newElem.textContent = "Inserted using insertAdjacentElement";
  el.insertAdjacentElement("beforeend", newElem);
</script>
```

---

## 🔹 3. `insertAdjacentText(position, text)`

Inserts **plain text** at the specified position.

### 🔸 Syntax:
```javascript
element.insertAdjacentText(position, text);
```

### 🔸 Example:
```html
<div id="container">Hello</div>

<script>
  const el = document.getElementById("container");
  el.insertAdjacentText("beforeend", " World!");
</script>
```

