const display = document.querySelector('#display');
const calcBtn = document.querySelectorAll('.calcBtn');
const clearBtn = document.querySelector('#clearBtn');
const equBtn = document.querySelector('#equBtn');

const operate = (num1,num2,operation) => {
    if(operation=='+'){
        return add(num1,num2);
    }
    else if(operation=='-'){
        return subtract(num1, num2);
    }
    else if(operation=='*'){
        return multiply(num1, num2);
    }
    else if(operation=='/'){
        return divide(num1, num2);
    }
    else{
        return "ERROR";
    }
};

const add = (x,y) => {
    return x+y;
};

const multiply = (x,y) => {
    return x*y;
};

const subtract = (x,y) => {
    return x-y;
};

const divide = (x,y) => {
    return x/y;
};


let arr = [];
let displayString = '';
const intoDisplay = (dis) => {
    displayString += dis;
    display.textContent=displayString;
};

calcBtn.forEach((key) => {
    key.addEventListener('click', () => {
        doCalc(key.textContent);
        intoDisplay(key.textContent);
    });
});

const clearDisplay = () => {
    displayString='';
    display.textContent=displayString;
    keepGoing=false;
    expectOperand=false;
    expectSecond=false;
}

clearBtn.addEventListener('click', ()=>{
    clearDisplay();
});

let first;
let second;
let operand;
let expectOperand=false;
let expectSecond=false;
let result;
let keepGoing=false;

const doCalc = (input) => {
    if(keepGoing==false){
        if(expectOperand==false){
            if(expectSecond==false){
                first=input;
                expectOperand=true;
            }
            else{
                second=input;
                expectSecond=false;
                result=operate(parseFloat(first),parseFloat(second),operand);
                keepGoing=true;
            }
        }
        else{
            operand=input;
            expectOperand=false;
            expectSecond=true;
        }
    }
    else{
        first=result;
        display.textContent=result;
        displayString=''+result;
        operand=input;
        expectSecond=true;
        keepGoing=false;
    }
};

const giveResult = () => {
    display.textContent=result;
    expectOperand=false;
    expectSecond=false;
    keepGoing=true;
    displayString='';
}

equBtn.addEventListener('click', ()=>{
    giveResult();
});