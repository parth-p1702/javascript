
# DOM Element Properties in JavaScript

This document explains key DOM properties used to access and modify HTML content using JavaScript.

## 📌 1. `innerHTML`

- **Description**: Gets or sets the HTML **inside** the element (excluding the element itself).
- **Example**:
  ```html
  <div id="demo"><p>Hello</p></div>
  ```
  ```js
  document.getElementById("demo").innerHTML;
  // Output: "<p>Hello</p>"
  ```
- **Use Case**: Modifying internal HTML content.

---

## 📌 2. `outerHTML`

- **Description**: Gets or sets the HTML **including** the element itself.
- **Example**:
  ```html
  <div id="demo"><p>Hello</p></div>
  ```
  ```js
  document.getElementById("demo").outerHTML;
  // Output: "<div id=\"demo\"><p>Hello</p></div>"
  ```
- **Use Case**: Replacing the entire element with new HTML.

---

## 📌 3. `textContent`

- **Description**: Gets or sets the **text content** of the element and its children, ignoring HTML tags.
- **Example**:
  ```html
  <div id="demo"><p>Hello <b>World</b></p></div>
  ```
  ```js
  document.getElementById("demo").textContent;
  // Output: "Hello World"
  ```
- **Use Case**: Extracting text without formatting or tags.

---

## 📌 4. `innerText`

- **Description**: Similar to `textContent` but respects CSS styling (e.g. hidden text won’t be included).
- **Example**:
  ```html
  <div id="demo"><p style="display:none;">Hidden</p>Visible</div>
  ```
  ```js
  document.getElementById("demo").innerText;
  // Output: "Visible"
  ```
- **Use Case**: Retrieving visible text as seen by the user.

---

## 📌 5. `value`

- **Description**: Used to get or set the value of form inputs (`<input>`, `<textarea>`, `<select>`).
- **Example**:
  ```html
  <input id="myInput" value="Hello">
  ```
  ```js
  document.getElementById("myInput").value;
  // Output: "Hello"
  ```

---

## 📌 6. `attributes` and `getAttribute()`

- **`attributes`**: Returns all attributes of an element as a NamedNodeMap.
- **`getAttribute("name")`**: Returns the value of the specified attribute.
- **Example**:
  ```html
  <div id="demo" class="box"></div>
  ```
  ```js
  document.getElementById("demo").getAttribute("class");
  // Output: "box"
  ```

---



## ✅ When to Use What?

- Use `innerHTML` to inject HTML content.
- Use `outerHTML` to replace the whole element.
- Use `textContent` to get all raw text.
- Use `innerText` to get visible text.
- Use `value` for form inputs.
- Use `getAttribute()` to read any custom or standard attribute.


