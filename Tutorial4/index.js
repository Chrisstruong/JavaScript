// How to accept user input

// EASY WAY with a window prompt

// 1)
// let username = window.prompt("What's your name?");
// console.log(username);

// Difficult Way HTML textbox
// 2)
let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value
    console.log(username)
    document.getElementById("myLabel").innerHTML = username
}