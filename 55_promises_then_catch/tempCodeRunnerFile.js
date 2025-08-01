function loadScript(src) {
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
