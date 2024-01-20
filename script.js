function addition(number1, number2) {
    return number1 + number2;
}

function substraction(number1, number2) {
    return number1 - number2
}

function multiplication(number1, number2) {
    return number1 * number2
}

function division(numerator, denominator) {
    return denominator == 0 ? "infinity" : numerator / denominator;
}

function power(number, power)
{
    let result = number;

    for(i=1; i<power; i++)
    {
        result *= number;
    }

    return power==0?1:result;
}

function infixToPostfix(expression) {
    let infixArray = parseExpression(expression);

    let operatorStack = [];

    let postfix = [];

    const operators =
    {
        ')': 4,
        '(': 3,
        '^': 2,
        '/': 1,
        '*': 1,
        '+': 0,
        '-': 0
    };

    for (i = 0; i < infixArray.length; i++) {
        opr = infixArray[i];

        if (Object.hasOwn(operators, opr)) {
            let currentOperatorPreference = operators[opr];

            let lastOperator = operatorStack[operatorStack.length - 1];

            let lastOperatorPreference = operators[lastOperator];

            if (opr != ")") {
                // current operator has higher precedence than last operator in stack
                if (currentOperatorPreference > lastOperatorPreference || lastOperator == "(" || operatorStack.length == 0) {
                    operatorStack.push(opr);

                }

                // Curret operator has lower precedence than last operator in stack
                else {
                    while (lastOperatorPreference >= currentOperatorPreference && operatorStack.length != 0 && lastOperator != "(") {
                        postfix.push(operatorStack.pop());
                        lastOperator = operatorStack[operatorStack.length - 1];
                        lastOperatorPreference = operators[lastOperator];
                    }

                    operatorStack.push(opr);
                }
            }
            else {
                while (lastOperator != "(") {
                    postfix.push(operatorStack.pop());
                    lastOperator = operatorStack[operatorStack.length - 1];
                }

                operatorStack.pop(); // remove the "("
            }
        }
        else {
            postfix.push(infixArray[i]);
        }
    }

    // Pop off remaining operators
    while (operatorStack.length != 0) {
        postfix.push(operatorStack.pop());
    }

    return postfix;
}

function calculatePostFix(postfix) {
    let numberStack = [];
    let number1 = 0;
    let number2 = 0;

    for (i = 0; i < postfix.length; i++) {
        currentCharacter = postfix[i];

        if (currentCharacter == "*"
            || currentCharacter == "+"
            || currentCharacter == "-"
            || currentCharacter == "/"
            || currentCharacter == "^"
            )
            {
            number2 = numberStack.pop();
            number1 = numberStack.pop();

            switch(currentCharacter) 
            {
                case "*":
                    numberStack.push(multiplication(number1, number2));
                    break;
                case "/":
                    numberStack.push(division(number1, number2));
                    break;
                case "+":
                    numberStack.push(addition(number1, number2));
                    break;
                case "-":
                    numberStack.push(substraction(number1, number2));
                    break;

                case "^":
                    numberStack.push(power(number1, number2));
                    break;                
            }
        }
        else {
            numberStack.push(parseInt(currentCharacter));
        }
    }''

    return numberStack.pop();
}

function parseExpression(expression)
{
    let infixArray = Array.from(expression);
    let item = "";
    formatedArray = []
    let hasDecimal = false;

    for(character of infixArray){
        if(character == "+" || character == "*" || character == "/" || character == "-" || character == "^"){
            if(hasDecimal)
            {
                formatedArray.push(parseFloat(item));
                hasDecimal = false;
            }
            else
            {
                formatedArray.push(parseInt(item));   
            }
            item = ""
            formatedArray.push(character);
        }
        else
        {
            if(character == ".")
            {
                hasDecimal = true;
            }
            item = item.concat(character);
        }
    }

    if(hasDecimal)
    {
        formatedArray.push(parseFloat(item));
        hasDecimal = false;
    }
    else
    {
        formatedArray.push(parseInt(item));   
    }

    return formatedArray;
}

function main() 
{
    let result= "";
    let isFloat = false;
    let expression = "";
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    let multiply = document.getElementById("multiply");
    let divide = document.getElementById("divide");
    let equal = document.getElementById("equal");
    let power = document.getElementById("power");
    let decimal = document.getElementById("decimal");
    let del = document.getElementById("del");
    let ac = document.getElementById("ac");
    let expressionScreen = document.getElementById("expression"); 
    let resultScreen = document.getElementById("result");

    let numberButtons = document.querySelectorAll(".number");

    for(button of numberButtons){
        let number = button.textContent;
        button.addEventListener("click", ()=>{
            expression = expression.concat(number);
            expressionScreen.textContent = expression;
        });
    }

    del.addEventListener("click", ()=>{
        expression = expression.substring(0, expression.length-1);
        expressionScreen.textContent = expression;
    })

    ac.addEventListener("click", ()=>{
        expression = "";
        expressionScreen.textContent = expression;
    })

    plus.addEventListener("click", ()=>{
        expression = expression.concat("+");
        expressionScreen.textContent = expression;
    });

    minus.addEventListener("click", ()=>{
        expression = expression.concat("-");
        expressionScreen.textContent = expression;
    });

    multiply.addEventListener("click", ()=>{
        expression = expression.concat("*");
        expressionScreen.textContent = expression;
    });

    divide.addEventListener("click", ()=>{
        expression = expression.concat("/");
        expressionScreen.textContent = expression;
    });

    power.addEventListener("click", ()=>{
        expression = expression.concat("^");
        expressionScreen.textContent = expression;
    })

    decimal.addEventListener("click", ()=>{
        expression = expression.concat(".");
        expressionScreen.textContent = expression;
    })

    equal.addEventListener("click", ()=>{
        let postfix = infixToPostfix(expression);
        let result = calculatePostFix(postfix);
        resultScreen.textContent = result;
    })
}

main();
// module.exports = {addition, substraction, multiplication, division, infixToPostfix, calculatePostFix}; 