// function = Define code once, and use it many timee. To perform some code, call the function name.

startProgram()

let userName = "Bro"
let age = 21

function startProgram() {
    let userName = "Bro"
    let age = 21

    happyBirthday()
}



function happyBirthday(userName, age) {
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!", userName)
    console.log("Happy birthday to you!", age)
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!")
}