let currentInt = [];
let currentIntArr;
let nextInt = 10;
let PositiveOrNegative = true;
let divideToken = false;
let plusToken = false;
let timesToken = false;
let minusToken = false;
let forceEqualsToken = false;

const display = document.getElementById('displayScreen')
const AC = document.getElementById('AC').addEventListener('click', (e) => {
    currentInt = 0;
    PositiveOrNegative = true;
    updateDisplay();
})
const posOrNeg = document.getElementById('+/-').addEventListener('click', (e) => {
    PositiveOrNegative = !PositiveOrNegative
    if (currentInt === 0) {
        PositiveOrNegative = true
    }
    else {
    if (PositiveOrNegative === true){
        currentInt = Math.abs(currentInt)
    }
    else if (PositiveOrNegative === false){
        currentInt = -Math.abs(currentInt)
    };
    updateDisplay()
}
})
const divide = document.getElementById('/').addEventListener('click', (e) => {
    divideToken = !divideToken
    newOperation()
})
const plus = document.getElementById('+').addEventListener('click', (e) => {
    plusToken = !plusToken
    newOperation()
})
const times = document.getElementById('*').addEventListener('click', (e) => {
    timesToken = !timesToken
    newOperation()
})
const minus = document.getElementById('-').addEventListener('click', (e) => {
    minusToken = !minusToken
    newOperation()
})
const equals = document.getElementById('=').addEventListener('click', (e)=> {
    PositiveOrNegative = true;
    if (divideToken === true) {
        divideToken = false;
        currentInt = Number(nextInt) / Number(currentInt);
    }
    if (plusToken === true) {
        plusToken = false;
        currentInt += Number(nextInt);
    }
    if (minusToken === true) {
        minusToken = false;
        currentInt = Number(nextInt) - Number(currentInt)
    }
    else if (timesToken === true) {
        timesToken = false;
        currentInt *= Number(nextInt);
    }
    
    updateDisplay();
})
const percentage = document.getElementById('%').addEventListener('click', (e) => {
    if (divideToken === true) {
        divideToken = false;
        currentInt = nextInt / currentInt;
    }
    if (plusToken === true) {
        plusToken = false;
        currentInt += nextInt;
    }
    if (minusToken === true) {
        minusToken = false;
        currentInt = nextInt - currentInt
    }
    if (timesToken === true) {
        timesToken = false;
        currentInt *= nextInt;
    }
    
    updateDisplay();
})
const decimal = document.getElementById('.').addEventListener('click', (e) => {
    addDecimalPlace()
})
/////////////////////////
let i = 0;
let buttons = document.getElementById("0")

while (buttons) {
    buttons.addEventListener("click", (e) => {
        num = e.target.id
        newInt(num)
    })
    buttons = document.getElementById((++i))
}
////////////////////////
function newOperation() {
    nextInt = currentInt
    currentInt = 0
    PositiveOrNegative = !PositiveOrNegative;
    updateDisplay()
}

  function newInt(num) {
    if (typeof currentInt !== 'object'){
        currentIntArr = String(currentInt).split(" ").map((currentInt) => {
            return currentInt
        })
                currentIntArr.push(num)
        currentInt = +currentIntArr.join("");
        updateDisplay()
    }
    else if (typeof currentInt === 'object'){
        currentInt.push(num)
        currentInt = +currentInt.join("");
        updateDisplay()
    }
}

  function addDecimalPlace() {
    let int = String(currentInt).split("").map((currentInt) => {
        return (currentInt)
    })
    currentInt = int.push('.')
    currentInt = int.join("");
    console.log(typeof(currentInt))

    updateDisplay()
}

function updateDisplay() {
    if (currentInt >= 0){
        if (currentInt < 9007199254740991){
            display.innerHTML = (currentInt);
        }
        else if (currentInt >= 9007199254740991){
            display.innerHTML = parseFloat(currentInt);
        }
    }
     else if (currentInt < 0) {
            PositiveOrNegative = false;
        if (currentInt < 9007199254740991){
            display.innerHTML = (currentInt);
        }
        else if (currentInt >= 9007199254740991){
            display.innerHTML = parseFloat(currentInt);
        }
    }
}