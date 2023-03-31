// rest parameters = represents an indefinite number of parameters (packs arguments into an array)

let a = 1
let b = 2
let c = 3
let d = 4
let e = 5

console.log(sum(a, b, c, d, e))

function sum(x,y, ...numbers) {//now x and y will = to a and b respectivelly. numbers will contain c,d,e
    let total = 0
    for (let number of numbers) {
        total += number
    }
    return total
}