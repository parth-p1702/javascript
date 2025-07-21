// Q1 following string output:
console.log("har\"".length); //4

// Q-2 explore include(),startwith(), endwith()
let name = "Abhi";
console.log(name.includes("bh"));
console.log(name.startsWith("A"));
console.log(name.endsWith("i"));

// Q3. WAp to covert string into lowercase()
console.log(name.toLowerCase());

// Q-4 Extract amout of this string
// Please give me Rs 1000
let str = "Please give me Rs 1000"
let amount = str.match(/\d+/);  // \d+ matches one or more digits

console.log(amount[0]);

// Q-5 Try to change 4th character of strings.
let str1 = "Hello World!";
console.log(str1.slice(0,3) + "z" + str.slice(4));

