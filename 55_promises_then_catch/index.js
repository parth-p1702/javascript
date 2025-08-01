// let p = new Promise(function(resolve,reject){
//     console.log("Promise still pending");
    
//     setTimeout(()=>{
//      console.log("I'm promise & I'm fullfilled ")
//      resolve(true)
//     },5000)
// })
// p.then(result=>console.log("Success",result))
// .catch(error=>console.error("Someting is wrong",error))

// Q-1 Write the loadscript function we wrote in the beginning of this chapter using promises.
function loadScript(src) {KO
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script); // resolve when script loads
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

        document.head.append(script);
    });
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js")
    .then(script => {
        console.log("Script loaded successfully:", script.src);
        console.log("Lodash version:", _.VERSION); // use the loaded library
    })
    .catch(error => {
        console.error("Script loading failed:", error);
    });
