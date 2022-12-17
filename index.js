const button0 = document.getElementById("0")
const button1 = document.getElementById("1")
const button2 = document.getElementById("2")
const button3 = document.getElementById("3")
const button4 = document.getElementById("4")
const button5 = document.getElementById("5")
const button6 = document.getElementById("6")
const button7 = document.getElementById("7")
const button8 = document.getElementById("8")
const button9 = document.getElementById("9")
const buttonX = document.getElementById("x")
const buttonDiv = document.getElementById("/")
const buttonMinus = document.getElementById("-")
const buttonEqual = document.getElementById("=")
const buttonPlus = document.getElementById("+")
const buttonC = document.getElementById("C")
const display = document.getElementById("display")

let value1 = ""
let value2 = ""
let operator = ""
let total = ""

button0.addEventListener("click", () => {
    if (operator == "") {
        value1 = value1 + 0   
    } else {
        value2 = value2 + 0
    }
})
button1.addEventListener("click", () => {
    if (operator == "") {
        value1 = value1 + 1   
    } else {
        value2 = value2 + 1
    }
})
button2.addEventListener("click", () => {
    if (operator == "") {
        value1 = value1 + 2   
    } else {
        value2 = value2 + 2
    }
})
button3.addEventListener("click", () => {
    if (operator == "") {
        value1 = value1 + 3   
    } else {
        value2 = value2 + 3
    }
})
button4.addEventListener("click", () => {
    if (operator == "") {
        value1 = value1 + 4   
    } else {
        value2 = value2 + 4
    }
})
button5.addEventListener("click", () => {
    if (operator == "") {
        value1 = value1 + 5   
    } else {
        value2 = value2 + 5
    }
})
button6.addEventListener("click", () => {
    if (operator == "") {
        value1 = value1 + 6   
    } else {
        value2 = value2 + 6
    }
})
button7.addEventListener("click", () => {
    if (operator == "") {
        value1 = value1 + 7   
    } else {
        value2 = value2 + 7
    }
})
button8.addEventListener("click", () => {
    if (operator == "") {
        value1 = value1 + 8   
    } else {
        value2 = value2 + 8
    }
})
button9.addEventListener("click", () => {
    if (operator == "") {
        value1 = value1 + 9   
    } else {
        value2 = value2 + 9
    }
})
buttonX.addEventListener("click", () => {
    operator = "*"  
}) 
buttonPlus.addEventListener("click", () => {
    operator = "+"  
}) 
buttonMinus.addEventListener("click", () => {
    operator = "-"   
}) 
buttonDiv.addEventListener("click", () => {
    operator = "/"   
}) 
buttonEqual.addEventListener("click", () => {
    console.log("value1 : " + value1)
    console.log("value2 : " + value2)
    console.log("operator : " + operator)
    if (operator === "*") {
        total = (value1 * value2)
    } else if (operator === "+") {
        total = (+value1 + +value2)
    } else if (operator === "/") {
        total = (value1 / value2)
    } else if (operator === "-") {
        total = (value1 - value2)
    }
   
    console.log(total)
  
    display.textContent = total
}) 

buttonC.addEventListener("click", () => {
    value1 = ""
    value2 = ""
    operator = ""
    total = ""
    console.log("cleared")
    console.log("value1 : " + value1)
    console.log("value2 : " + value2)
    console.log("operator : " + operator)
    console.log("total : " + total)
})


