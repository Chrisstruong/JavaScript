/*
    arithmetic expression is a combination of...
    operands (values, variables, etc.)
    operators(+ - * / %)
    that can be evaluated to a value
    ex. y = x + 5;
*/

let student = 20;

// student = student * 2;

// let extraStudent = student % 3
// student = student ** 2;

student +=1 //augmented assignment operator
student -=1
student *=2
student /= 2
let extraStudent =  student % 2;

/*
    operator precedence:
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = (1 + 2) * (7);

console.log(result)