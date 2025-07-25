
# 📘 JavaScript Dialog Boxes

JavaScript provides three types of dialog boxes:

---

## 1. `alert()`

**Purpose**:  
Used to display a message to the user.

**Syntax**:
```javascript
alert("This is an alert box!");
```

**Features**:
- Displays a popup with a message and an **OK** button.
- Used for warnings or important information.
- Execution is paused until the user clicks OK.

**Example**:
```javascript
alert("Welcome to the website!");
```

---

## 2. `confirm()`

**Purpose**:  
Used to ask the user to confirm or cancel something.

**Syntax**:
```javascript
let result = confirm("Are you sure you want to delete this?");
```

**Features**:
- Returns `true` if OK is pressed.
- Returns `false` if Cancel is pressed.

**Example**:
```javascript
if (confirm("Do you really want to logout?")) {
  console.log("User confirmed logout.");
} else {
  console.log("User canceled logout.");
}
```

---

## 3. `prompt()`

**Purpose**:  
Used to take input from the user.

**Syntax**:
```javascript
let name = prompt("Enter your name:");
```

**Features**:
- Returns the input as a string.
- Returns `null` if Cancel is pressed.

**Example**:
```javascript
let username = prompt("What's your name?");
if (username !== null) {
  alert("Hello, " + username + "!");
} else {
  alert("You canceled the prompt.");
}
```