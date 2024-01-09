function addition(number1, number2){
    return number1 + number2;
}

function substraction(number1, number2){
    return number1 - number2
}

function multiplication(number1, number2){
    return number1 * number2
}

function division(numerator, denominator){
    return denominator==0? "infinity" : numerator/denominator;
}

function infixToPostfix(expression){
    // try to understand the infix and prefix idea by myself
}

function operate(operator, number1, number2){
    switch(operator){
        case "+":
            return addition(number1, number2);
        case "-":
            return substraction(number1, number2);
        case "*":
            return multiplication(number1, number2);
        case "/":
            return division(number1, number2)
    };
};

let op = "";

let num1 = 0;
let num2 = 0;

module.exports = {addition, substraction, multiplication, division, infixToPostfix, operate}; 