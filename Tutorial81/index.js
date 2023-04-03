const myButton = document.querySelector("#myButton")
const myImg = document.querySelector("myImg")

myButton.addEventListener("click", () => {
console.log(myImg.style.display)

    if(myImg.style.visibility == "hidden") {
        myImg.style.visibility = "visible"
    } else {
        myImg.style.visibility = "hidden"
    }
})