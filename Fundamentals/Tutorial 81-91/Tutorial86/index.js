// cookie = a small text file stored on your computer used to remember information about the user saved in name = value pairs

// console.log(navigator.cookieEnabled)

// document.cookie = "firstName=SpongeBob; expire=Fri, 7 January 2023 12:00:00 UTC; path=/"
// document.cookie = "lastName=SquarePants; expire=Fri, 7 January 2023 12:00:00 UTC; path=/"
// console.log(document.cookie)


// deleteCookie("firstName")
// deleteCookie("lastName")
// deleteCookie("email")

// console.log(document.cookie)


const firstText = document.querySelector("#firstText")
const lastText = document.querySelector("#lastText")
const submitBtn = document.querySelector("#sumitBtn")
const cookieBtn = document.querySelector("#cookieBtn")

submitBtn.addEventListener("click", ()=>{
    setCookie("firstName", firstText.value, 365)
    setCookie("lastName", lastText.value, 365)
})
cookieBtn.addEventListener("click", ()=>{
    firstText.value = getCookie("firstName")
    lastText.value = getCookie("lastName")
})

deleteCookie("firstName")
deleteCookie("lastName")

setCookie("firstName", "SpongeBob", 365)
setCookie("lastName", "SquarePants", 365)

console.log(getCookie("firstName"))
console.log(getCookie("lastName"))

function setCookie(name, value, daysToLive) {
    const date = new Date()
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
    let expire = "expires="+date.toUTCString()
    document.cookie = `${name}=${value}; ${expire}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null)
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split("; ")
    let result
    
    cArray.forEach(element=>{
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result
}