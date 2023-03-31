// callback = a function passed as an argument to another function

sum(2, 3, displayConsole)

function sum(x, y, callback) {
    let result = x + y
    callback(result)
}

function displayConsole(output) {
    console.log(output)
}

function displayDom(output) {
    document.getElementById("myLabel").innerHTML = output
}