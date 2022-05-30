let currentInt = [];
let currentIntArr;
let nextInt = 10;
let PositiveOrNegative = true;
let divideToken = false;
let plusToken = false;
let timesToken = false;
let minusToken = false;

const display = document.getElementById('displayScreen')
const AC = document.getElementById('AC').addEventListener('click', (e) => {
    currentInt = 0;
    updateDisplay();
})
const posOrNeg = document.getElementById('+/-').addEventListener('click', (e) => {
    PositiveOrNegative = !PositiveOrNegative

    if (PositiveOrNegative === true){
        currentInt = Math.abs(currentInt)
    }
    else if (PositiveOrNegative === false){
        currentInt = -Math.abs(currentInt)
    };
    updateDisplay()
})
const divide = document.getElementById('/').addEventListener('click', (e) => {
    divideToken = !divideToken
    newOperation()
})
const plus = document.getElementById('+').addEventListener('click', (e) => {
    plusToken = !plusToken
    newOperation()
})
const times = document.getElementById('x').addEventListener('click', (e) => {
    timesToken = !timesToken
    newOperation()
})
const minus = document.getElementById('-').addEventListener('click', (e) => {
    minusToken = !minusToken
    newOperation()
})
const equals = document.getElementById('=').addEventListener('click', (e)=> {
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
const zero = document.getElementById('number0').addEventListener('click', (e) => {
    newInt(0);
})
const one = document.getElementById('number1').addEventListener('click', (e) => {
    if (PositiveOrNegative = true){
        newInt(1);   
    }
    else if (PositiveOrNegative = false){
        newInt(-1);

    }    
})
const two = document.getElementById('number2').addEventListener('click', (e) => {
    newInt(2);
})
const three = document.getElementById('number3').addEventListener('click', (e) => {
    newInt(3);
})
const four = document.getElementById('number4').addEventListener('click', (e) => {
    newInt(4);
})
const five = document.getElementById('number5').addEventListener('click', (e) => {
    newInt(5);
})
const six = document.getElementById('number6').addEventListener('click', (e) => {
    newInt(6);
})
const seven = document.getElementById('number7').addEventListener('click', (e) => {
    newInt(7);
})
const eight = document.getElementById('number8').addEventListener('click', (e) => {
    newInt(8);
})
const nine = document.getElementById('number9').addEventListener('click', (e) => {
    newInt(9);
})
const decimal = document.getElementById('decimal').addEventListener('click', (e) => {
    addDecimalPlace(currentInt)
})



function newOperation() {
    nextInt = currentInt
    currentInt = 0
    PositiveOrNegative = !PositiveOrNegative;
    updateDisplay()
}

function newInt(num) {
    if (typeof currentInt !== 'object'){
        currentIntArr = String(currentInt).split("").map((currentInt) => {
            return Number(currentInt)
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

  function addDecimalPlace(num) {
    let int = String(currentInt).split("").map((currentInt) => {
        return (currentInt)
    })
    console.log(int)
    let pushDecimal = int.push('.')
    console.log(int)
    currentInt = +int.join("");
    console.log(currentInt)

    updateDisplay()
  }

function updateDisplay() {
    if (currentInt < 9007199254740991){
        display.innerHTML = (currentInt);
    }
    else if (currentInt >= 9007199254740991){
        display.innerHTML = parseFloat(currentInt);
    }
    
}