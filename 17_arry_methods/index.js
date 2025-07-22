// 1. toString() convert array into string
let n = [1,2,3,4]
console.log( n.toString());

// 2.join() joins all array elements using separator 
console.log(n.join("-"));

// 3.pop() remove last element of array 
console.log(n.pop()); //[1,2,3]

// 4. push() add value
console.log(n.push(4));

// 5.shift() remove first latter
console.log(n.shift());
// 6.unshift add element at beginning return new array length
console.log(n.unshift(10));

// 7.delete :- delete item
let d = [6,7,8,9]
console.log(delete d[1])
console.log(d);

// Splice()
let num = [1,2,3,4,5]
console.log(num.splice(2,1,23,23));
console.log(num);


