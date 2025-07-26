
# HTML Attributes and JavaScript Methods

This README provides a detailed overview of common HTML attributes and their corresponding JavaScript methods for interacting with them.

---

## 📌 What are HTML Attributes?

HTML attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like: `name="value"`.

**Example:**
```html
<input type="text" id="username" value="JohnDoe" placeholder="Enter name" />
```

---

## 📌 Common HTML Attributes

| Attribute     | Description                                |
|---------------|--------------------------------------------|
| `id`          | Unique identifier for the element          |
| `class`       | CSS class(es) applied to the element       |
| `href`        | URL for anchor tags (`<a>`)                |
| `src`         | Source URL for images/videos/scripts       |
| `alt`         | Alternate text for images                  |
| `title`       | Tooltip text shown on hover                |
| `style`       | Inline CSS styling                         |
| `value`       | Value of input elements                    |
| `placeholder` | Placeholder text for inputs                |
| `type`        | Input type (e.g., text, password)          |
| `name`        | Name of input used when submitting forms   |
| `disabled`    | Disables form elements                     |
| `checked`     | Checked state of checkbox/radio inputs     |
| `readonly`    | Makes input read-only                      |
| `required`    | Marks form input as required               |

---

## 📌 JavaScript Methods to Interact with Attributes

### ✅ `getAttribute(attributeName)`
- Returns the value of the specified attribute.
```js
let value = element.getAttribute("value");
```

### ✅ `setAttribute(attributeName, value)`
- Sets or updates the value of the specified attribute.
```js
element.setAttribute("placeholder", "Enter your name");
```

### ✅ `removeAttribute(attributeName)`
- Removes the specified attribute from the element.
```js
element.removeAttribute("readonly");
```

### ✅ `hasAttribute(attributeName)`
- Checks if the element has the specified attribute.
```js
if (element.hasAttribute("disabled")) {
  console.log("Input is disabled");
}
```

---

## 📌 Example Code

```html
<input id="email" type="email" value="example@example.com" />
```

```js
const emailInput = document.getElementById("email");

console.log(emailInput.getAttribute("value"));         // "example@example.com"
emailInput.setAttribute("placeholder", "Enter email"); // Set new placeholder
emailInput.removeAttribute("type");                    // Remove 'type' attribute
console.log(emailInput.hasAttribute("value"));         // true
```

