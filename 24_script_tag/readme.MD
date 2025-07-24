# 📚 JavaScript in the Browser – Using `<script>` Tag

JavaScript is used in the browser to make websites interactive and dynamic. It can be added to your HTML in two main ways:

1. Internal JavaScript – written directly inside HTML using the `<script>` tag.
2. External JavaScript – written in a separate `.js` file and linked using `<script src="...">`.

---

## ✅ 1. Internal JavaScript

Internal JavaScript is written **inside the same HTML file** using the `<script>` tag.

### 📌 Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Internal JavaScript</title>
</head>
<body>

  <h2 id="demo">Hello!</h2>
  <button onclick="changeText()">Click Me</button>

  <script>
    function changeText() {
      document.getElementById("demo").innerText = "Text changed!";
    }
  </script>

</body>
</html>
