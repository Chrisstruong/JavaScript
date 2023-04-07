// ternary operator = Shortcut for an 'if/else statement' 
// Takes 3 operands
// 1. a condition with ?
// 2. expression if true :
// 3. expression if false

// condition ? exprIfTrue : exprIfFalse


checkWinner(true)

function checkWinner(win) {
    win ? console.log("YOU WIN") : console.log("YOU LOSE")
}

