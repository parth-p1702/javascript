// Q-1 Used object & print keys of obj using  for loops 
let marks = {
    visha:"90",
    mani:"9",
    vari:"50",
}
for(let i = 0;i< Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i]+":"+marks[Object.keys(marks)[i]]);
    
}