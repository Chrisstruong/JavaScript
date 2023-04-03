const myButton = document.getElementById("myButton")
const myAnimation = document.getElementById("myDiv")

myButton.addEventListener("click", begin)

function begin() {
    let timerId = null
    let scaleX = 1
    let scaleY = 1

    timerId = setInterval(frame, 5000)
    function frame() {
        if (scaleY <= 0.1 || scaleX <= 0.1){
            clearInterval(timerId)
        } else {
            scaleY -= 0.01
            scaleX -= 0.01
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")"

        }
    }
}

