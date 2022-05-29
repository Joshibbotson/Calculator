let currentInt = [];
let currentIntArr;
let nextInt = 10;
let PositiveOrNegative = false;
let plusToken = false;
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
const plus = document.getElementById('+').addEventListener('click', (e) => {
    plusToken = !plusToken
    nextInt = currentInt
    currentInt = 0
    updateDisplay()
})
const minus = document.getElementById('-').addEventListener('click', (e) => {
    minusToken = !minusToken
})
const equals = document.getElementById('=').addEventListener('click', (e)=> {
    if (plusToken === true) {
        plusToken = false;
        currentInt += nextInt;
    }
    if (minusToken === true) {
        minusToken = false;
        currentInt -= nextInt
    }
    
    updateDisplay();
})
const one = document.getElementById('number1').addEventListener('click', (e) => {
    if (typeof currentInt !== 'object'){
        currentIntArr = String(currentInt).split("").map((currentInt) => {
            return Number(currentInt)
        })
				currentIntArr.push(1)
        currentInt = +currentIntArr.join("");
        updateDisplay()
    }
    else if (typeof currentInt === 'object'){
        currentInt.push(1)
        currentInt = +currentInt.join("");
        console.log(currentInt)
        updateDisplay()
    }
})



function updateDisplay() {
    display.innerHTML = currentInt;
}