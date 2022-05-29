let currentInt = 10;
let nextInt = 10;
let PositiveOrNegative = false;
let plusToken = false;

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
})
const equals = document.getElementById('=').addEventListener('click', (e)=> {
    if (plusToken === true) {
        plusToken = false;
        currentInt = currentInt + nextInt;
    }
    
    updateDisplay();
})
function updateDisplay() {
    display.innerHTML = currentInt;
}