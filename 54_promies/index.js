// Topic :- Promises
// ans:- A promise is a "promise of code execution".The code either executes or fails, in both
// the cases the subscriber will be notified.

let promise = new Promise(function(resolve,regect){
    let success = true
    if(success){
        resolve("Task is completed")
    }
    else{
        regect("Task is uncompleted")
    }
})