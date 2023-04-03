// async = makes a function return a Promise
// await = makes a function wait for a Promise

function loadFile() {
    let fileLoaded  = false
    if(fileLoaded){
        return Promise.resolve("File Loaded")
    } else {
        return Promise.reject("FILE NOT loaded")
    }
}

promise().then(value=> console.log(value))
        .catch(error => console.log(error))