let a;
let b;
let c;


// a = window.prompt("Enter size A:");
// a = Number(a)

// b = window.prompt("Enter size B: ");
// b = Number(b)

// c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2))

// console.log("Side C: ",c);


document.getElementById("submitButton").onClick = function() {
    a = document.getElementById("aTextBox").value
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b)

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}