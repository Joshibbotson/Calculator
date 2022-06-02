let currentInt = [];
let currentIntArr;
let nextInt = 10;
let PositiveOrNegative = true;
let operation;
let divideToken = false;
let plusToken = false;
let timesToken = false;
let minusToken = false;
let forceEqualsToken = false;

/////////////////////////
let buttons;
let keys;
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.forEach(num => {
    buttons = document.getElementById((num)).addEventListener('click', (e)=>{
        btnChoice = e.target.id;
        newInt(btnChoice)
    })
});

// WORK IN PROGRESS TO GET KEYBOARD WORKING BELOW//
// arr.forEach(num => {
    
//         keys= document.getElementById((num)).addEventListener('keydown', (e) => {
//             let keyInput = e.key;
//         if (typeof(keyInput !== 'number')){
//             keyChoice = e.key
//             newInt(keyChoice)}
//         else {return}
//     })
    
// });

////////////////////////

const display = document.getElementById('displayScreen')
const AC = document.getElementById('AC').addEventListener('click', (e) => {
    currentInt = [0];
    operation = undefined;
    PositiveOrNegative = true;
    updateDisplay();
})
const posOrNeg = document.getElementById('+/-').addEventListener('click', (e) => {
    if (currentInt == 0) {
        return
    }
    else {
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
    }
})
const divide = document.getElementById('/').addEventListener('click', (e) => {
    operation = '/'
    newOperation()
})
const plus = document.getElementById('+').addEventListener('click', (e) => {
    operation = '+'
    newOperation()
})
const times = document.getElementById('*').addEventListener('click', (e) => {
    operation = '*'
    newOperation()
})
const minus = document.getElementById('-').addEventListener('click', (e) => {
    operation = '-'
    newOperation()
})
const equals = document.getElementById('=').addEventListener('click', (e)=> {
    PositiveOrNegative = true;
    currentInt = Number(currentInt)
    nextInt = Number(nextInt)

    switch(operation) {
        case '/':
            operation = undefined;
            currentInt = Number(nextInt) / Number(currentInt);
            break;
        case '+':
            operation = undefined;
            currentInt += Number(nextInt);
            break;
        case '-':
            operation = undefined;
            currentInt = Number(nextInt) - Number(currentInt)
            break;
        case '*':
            operation = undefined;
            currentInt *= Number(nextInt);
    }
    updateDisplay();
})
const percentage = document.getElementById('%').addEventListener('click', (e) => {
})
const decimal = document.getElementById('.').addEventListener('click', (e) => {
    addDecimalPlace()
})
///////////////////// Functions ////////////////
function newOperation() {
    if (currentInt != 0){
    nextInt = currentInt
    currentInt = [0]
    PositiveOrNegative = !PositiveOrNegative;
    updateDisplay()
}

}

function newInt(num) {
    if (typeof currentInt !== 'object'){
        currentIntArr = String(currentInt).split(" ").map((currentInt) => {
            return currentInt
        })
        currentIntArr.push(num)
        currentInt = currentIntArr.join("");
        updateDisplay()
    }
    
    else if (typeof currentInt === 'object'){
        if (currentInt = [] && num == 0) {
            return currentInt = []
        }
        currentInt = num
        updateDisplay()
    }
}

function addDecimalPlace() {
    if (String(currentInt).includes(".")) {
        return
    }

    if (currentInt[0] = 0) {
        let int = String(currentInt).split("").map((currentInt) => {
            return currentInt
        })
        currentInt = int.push('0.')
        currentInt = int.join("");
        updateDisplay()
    }

    else {
        let int = String(currentInt).split("").map((currentInt) => {
            return currentInt
        })
        currentInt = int.push('.')
        currentInt = int.join("");
        updateDisplay()
    }
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
    if (currentInt < 0) {
            PositiveOrNegative = false;
        if (currentInt < 9007199254740991){
            display.innerHTML = (currentInt);
        }
        else if (currentInt >= 9007199254740991){
            display.innerHTML = parseFloat(currentInt);
        }
    }
    else {
        display.innerHTML = currentInt;
    }
}