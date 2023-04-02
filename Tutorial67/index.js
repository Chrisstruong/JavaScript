const myLabel = document.getElementById("myLabel")

update()
setInterval(update, 1000)

function update(){
    let date  = new Date()
    myLabel.innerHTML = formatTime(date)


    function formatTime() {
        let hours = date.getHours()
        let min = date.getMinutes()
        let seconds = date.getSeconds()
        let amOrPm = hours >= 12 ? "pm" : "am"

        hours = (hours % 12) || 12
        
        hours = formatZeroes(hours)
        min = formatZeroes(min)
        seconds = formatZeroes(seconds)
        
        return `${hours}:${min}:${seconds} ${amOrPm}`
    }
    function formatZeroes(time) {
        time = time.toString()
        return time.length < 2 ? "" + time : time
    }
}