
// const element = document.getElementById("myButton")
// const element = document.body
// const element = document.getElementById("myText")
const element = document.getElementById("myDiv")


// element.onclick = doSomething
// element.onload = doSomething
// element.onchange = doSomething
// element.onmouseover = doSomething
// element.onmouseout = doSomething
element.onmousedown = doSomething
element.onmouseup = doSomething

function doSomething() {
    // alert("You did something!")
    element.style.backgroundColor = "red"
}

function doSomethingElse() {
    element.style.backgroundColor = "green"
}