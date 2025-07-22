// Q.1 Add number in array
let prompt = require("prompt-sync")();

// let arr = [1,2,3]
// let a = Number(prompt("Enter number:"))
// arr.push(a)
// console.log(arr);

// Q.2 keep adding numbers to the array in Q-1 until 0 is added to the array
// let arr1 = [12, 3, 5, 67];
// let a;
// do {
//   a = Number(prompt("Enter number"));
//   arr1.push(a);
// } while (a != 0);
// console.log(arr1);

// Also using while loop
// let arr1 = [12, 3, 5, 67];
// let a = Number(prompt("Enter number:"));

// while (a !== 0) {
//   arr1.push(a);
//   a = Number(prompt("Enter number:"));
// }

// console.log(arr1)

// Q-3 using filter for numbers div by 10 from a given array
// let arr = [2,20,56,50,70]
// let a =arr.filter((item)=>{
//     return item%10 == 0
// })
// console.log(a);

// Q-4 create an array of square of given numbers
// let a  = [2,3,4]
// a.forEach((ele)=>{
//     console.log(ele*ele);
// })

// Q-5 using reduce() find factorial of first n numbers
let a  = [1,2,3,4]
let an = a.reduce((h1,h2)=>{
    return h1*h2
})
console.log(an);
