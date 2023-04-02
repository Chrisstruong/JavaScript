// The idea behind a module is that its a file of resuable code
// We cam import sections of pre-written code to use whenever
// Great for any general ultility values and functions
// Helps to make your code more resuable and maintainable
// Think of modules as seperate chapters of a book

import * as MathUtil from "./math_util.js"

console.log(MathUtil.PI)

let circumference = MathUtil.getCircumference(10)
console.log(circumference)

let area = MathUtil.getArea(10)
console.log(area)