// with for loop
let num = [3,54,1,2,4]
for(let i = 0; i<num.length;i++){
    console.log(num[i]); 
}

// ForEach loop used apply all elements
num.forEach((ele)=>{
    console.log(ele*ele);
})

// Array.From is used to create array from any other object
console.log( Array.from("PARTH"));


// for..of : is used to get value of array
let n1 = [2,45,50]
for(i of n1){
    console.log(i);
    
}
// for..in:- return index or keys of array
for(i in n1){
    console.log(i);
    
}