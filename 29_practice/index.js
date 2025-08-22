// Q-1 Wap using prompt function to take input of age as a value from the user and use alert
// to tell him if he can drive!
let prompt = require("prompt-sync")();
// let age = Number(prompt("Enter age:"))
// if(age>=18){
//     alert("You can drive car")
// }
// else{
//     alert("You're still child so enjoy you're days")
// }

// Q-2 use confirm to ask the user if he wants to see the prompt again
// let repeat;
// do {
//     let age = Number(prompt("Enter age:"));

//     if (age >= 18) {
//         alert("You can drive car");
//     } else {
//         alert("You're still child so enjoy your days");
//     }

//     repeat = confirm("Do you want to enter age again?");
// } while (repeat);

// Q-3 above que if user can entered wrong age than show error message using console.error()
// let age = Number(prompt("Enter age:"));
// if (age <= 0) {
//   console.error("Please enter right age.");
// } else {
//   if (age >= 18) {
//     alert("You can drive car");
//   } else {
//     alert("You're still child so enjoy you're days");
//   }
// }

// Q-4 WAP to change the URL to google.com if user enter a number greater than 4
// let age = Number(prompt("Enter age:"));
// if(age>4){
//     location.href= "https://www.google.com"
// }
// else{
//     alert("You're still chid ")
// }

// Q-5 change the bgcolor based on user input
let n = prompt("Enter no for background color: 1:red 2:yello 3:green")
if(n==1){
    document.body.style.background = "red"
}
else if(n==2){
    document.body.style.background = "yellow"
}
else if(n==3){
    document.body.style.background = "green"
}
else{
    alert("Enter number given on top")
}