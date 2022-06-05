//Global variables//
let currentInt = [];
let currentIntArr;
let nextInt = null;
let PositiveOrNegative = true;
let operation;
let forceEqualsToken = false;

//Assignment of operations and number buttons//
let buttons;
let opButtons;
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '÷', 'x']
let opArr = ['+', '-', '÷', 'x']

opArr.forEach(op => {
    opButtons = document.getElementById((op)).addEventListener('click', (e) => {
        let newOp = e.target.id;
        if (operation = newOp) {
            newOperation()
        }
        operation = newOp
        newOperation()
    })
});

arr.forEach(num => {
    buttons = document.getElementById((num)).addEventListener('click', (e)=>{
        btnChoice = e.target.id;
        if (btnChoice < 11){
        newInt(btnChoice)
    }
    else{
        display.innerHTML = btnChoice
    }
    })
});

// WORK IN PROGRESS TO GET KEYBOARD WORKING BELOW//
// let keys;
// arr.forEach(num => {
//     keys= document.getElementById((num)).addEventListener('keydown', (e) => {
//         let keyInput = e.key;
//     if (keyInput < 10 && arr.includes(keyInput)){
//         newInt(keyInput)
//     }
//     if (typeof(keyInput) !== 'number' && arr.includes(keyInput)){
//         operation = keyInput
//         newOperation()
//     }
//     else {
//         return
//     }
//     })
// });
////////////////////////
//Assignment of display screen and all other buttons with unique requirements when clicked.//
const display = document.getElementById('displayScreen')
const AC = document.getElementById('AC').addEventListener('click', (e) => {
    display.innerHTML = 0
    currentInt = [];
    nextInt = null
    operation = undefined;
    PositiveOrNegative = true;

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

const equals = document.getElementById('=').addEventListener('click', (e)=> {
    PositiveOrNegative = true;
    currentInt = Number(currentInt)
    nextInt = Number(nextInt)

    switch(operation) {
        case '÷':
            if (currentInt === 0) {
                operation = undefined;
                display.innerHTML = "404 brain not found" 
                currentInt = []
                break;
            }
            operation = undefined;
            currentInt = Number(nextInt) / Number(currentInt);
            nextInt = null;
            updateDisplay();
            break;
        case '+':
            operation = undefined;
            currentInt += Number(nextInt);
            nextInt = null;
            updateDisplay();
            break;
        case '-':
            operation = undefined;
            currentInt = Number(nextInt) - Number(currentInt)
            nextInt = null;
             updateDisplay();
            break;
        case 'x':
            operation = undefined;
            currentInt *= Number(nextInt);
            nextInt = null;
            updateDisplay();
    }

})

const deleteBtn = document.getElementById('delete').addEventListener('click', (e) => {
    deleteInt()
})

const percentage = document.getElementById('%').addEventListener('click', (e) => {
    PositiveOrNegative = true;
    currentInt = Number(currentInt)
    nextInt = Number(nextInt)

    switch(operation) {
        case undefined:
           if (currentInt != 0) {
                currentInt = Number(currentInt) / 100
                break
            }
            else {
                currentInt = Number(currentInt) / 100
                currentInt = [0]
                break
            }
            
        case '÷':
            operation = undefined;
            currentInt = Number(nextInt) / 100
            break;
        case '+':
            operation = undefined;
            currentInt = Number(nextInt) + (Number(nextInt)/100)* Number(currentInt) 
            break;
        case '-':
            operation = undefined;
            currentInt = Number(nextInt) - (Number(nextInt)/100)* Number(currentInt) 
            break;
        case 'x':
            operation = undefined;
            currentInt = (Number(nextInt)/100)* Number(currentInt)  
    }
    updateDisplay();
})
const decimal = document.getElementById('.').addEventListener('click', (e) => {
    addDecimalPlace()
})
////////////// Functions ////////////////
function newOperation() {
    if (currentInt != 0){
        nextInt = currentInt
        currentInt = []
        PositiveOrNegative = !PositiveOrNegative;
        updateDisplay()
    }
    else {
        return
    }
}

function newInt(num) {
    if (typeof currentInt !== 'object'){
        currentIntArr = String(currentInt).split(" ").map((currentInt) => {
            return currentInt
        })
            currentIntArr.push(num)
            if (currentIntArr[0] === '0') {
                currentIntArr.shift()
                currentInt = currentIntArr.join("");
                updateDisplay()
            }
            else {
                currentInt = currentIntArr.join("");
                updateDisplay()
            }

    }
    else if (typeof currentInt === 'object'){
        if (currentInt = [] && num == 0) {
            return currentInt = []
        }
        currentInt = num
        updateDisplay()
    }
}

function deleteInt() {
    if (typeof currentInt !== 'object'){
        currentIntArr = String(currentInt).split("").map((currentInt) => {
            return currentInt
        })
        if (currentIntArr.length > 1){
            currentIntArr.pop()
            currentInt = currentIntArr.join("");
            updateDisplay()
        }
        else {
            currentInt = []
            display.innerHTML = 0;
        }

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
            display.innerHTML = BigInt(currentInt);
        }
    }
    if (currentInt < 0) {
            PositiveOrNegative = false;
        if (currentInt < 9007199254740991){
            display.innerHTML = (currentInt);
        }
        else if (currentInt >= 9007199254740991){
            display.innerHTML = BigInt(currentInt);
        }
    }
    else {
        display.innerHTML = currentInt;
    }
}
