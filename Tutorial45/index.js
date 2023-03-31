// function expression = function without a name (anoymous function) avoid polluting the global scope with names. Write it, then forget about it

let count = 0

    document.getElementById("increaseButton").onclick = function() {
        count += 1  
        document.getElementById("myLabel").innerHTML = count
    }

    document.getElementById("decreaseButton").onclick = function() {
        count -= 1
        document.getElementById("myLabel").innerHTML = count
    }



// function increaseCount() {
//     count += 1
//     document.getElementById("myLabel").innerHTML = count
// }
// function decreaseCount() {
//     count -= 1
//     document.getElementById("myLabel").innerHTML = count
// }