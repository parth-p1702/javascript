
# ❗ JavaScript Errors & Custom Errors

In JavaScript, **errors** are unexpected problems that occur during code execution. They can be system-defined or custom-defined.

---

## 🔍 Common JavaScript Errors

1. **ReferenceError**  
   Accessing a variable that doesn't exist.  
   ```javascript
   console.log(x); // ReferenceError: x is not defined
   ```

2. **TypeError**  
   Performing an invalid operation on a data type.  
   ```javascript
   let num = 5;
   num(); // TypeError: num is not a function
   ```

3. **SyntaxError**  
   Invalid JavaScript syntax.  
   ```javascript
   let = 5; // SyntaxError: Unexpected token '='
   ```

4. **RangeError**  
   A number is out of range.  
   ```javascript
   let arr = new Array(-1); // RangeError: Invalid array length
   ```

---

## ⚙️ Handling Errors with try...catch

```javascript
try {
  let result = someFunction();
} catch (error) {
  console.error("Caught an error:", error.message);
}
```

---

## 🛠️ Creating Custom Errors

You can define your own error types using the `class` keyword.

```javascript
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

try {
  throw new MyCustomError("Something went wrong in my logic!");
} catch (error) {
  console.error(error.name + ": " + error.message);
}
```

---
