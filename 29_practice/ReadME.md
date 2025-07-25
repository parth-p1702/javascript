# 🚦 JavaScript Drive Eligibility Checker

This mini project demonstrates how to interact with users using JavaScript's `prompt()`, `alert()`, `confirm()`, and `console.error()` to determine driving eligibility based on age.

---

## ✅ Q-1: Use `prompt()` to Take Input of Age and `alert()` to Tell if User Can Drive

```javascript
let age = prompt("Enter your age:");

if (age >= 18) {
  alert("✅ You can drive!");
} else {
  alert("⛔ You cannot drive yet.");
}
```

---

## ✅ Q-2: Ask User with `confirm()` if They Want to Try Again

```javascript
let again = true;

while (again) {
  let age = prompt("Enter your age:");

  if (age >= 18) {
    alert("✅ You can drive!");
  } else {
    alert("⛔ You cannot drive yet.");
  }

  again = confirm("Do you want to check again?");
}
```

---

## ✅ Q-3: Show `console.error()` if Invalid Age Is Entered

We’ll add validation for wrong input (like negative numbers, empty input, non-numeric values).

```javascript
let again = true;

while (again) {
  let age = prompt("Enter your age:");

  // Check if input is valid
  if (age === null || age.trim() === "" || isNaN(age) || age < 0) {
    console.error("❌ Invalid age entered!");
    alert("⚠️ Please enter a valid age.");
  } else if (age >= 18) {
    alert("✅ You can drive!");
  } else {
    alert("⛔ You cannot drive yet.");
  }

  again = confirm("Do you want to check again?");
}
```

