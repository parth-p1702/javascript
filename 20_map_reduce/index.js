// 1. map() :- create a new array by performing some operations
// let n = [1,2,3]
// let n1 = n.map((ele)=>{
//     console.log(ele);
//     return ele +1
// })

// n.map((ele,index)=>{
//   console.log(ele,index);
  
// })
 
// 2.filter() :- fliter any an array by using condition
// let a = [23,20,2,4,5]
// let a1 = a.filter((val)=>{
//     return val>10
// })
// console.log(a1);

// 3.reduce() :- reduce an array in a single value
let n = [1,2,3]
let n1 = n.reduce((h1,h2)=>{
    return h2-h1
})
console.log(n1);
