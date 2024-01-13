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
    let infixArray = Array.from(expression);

    let operatorStack = [];

    let postfix = []; 

    const operators = 
    {
        ')':4,
        '(':3,
        '^': 2,
        '/':1,
        '*':1,
        '+':0,
        '-':0 
    };

    for(i=0; i<infixArray.length; i++)
    {
        opr = infixArray[i];

        if(Object.hasOwn(operators,opr))
        {
            let currentOperator = operators[opr];

            let lastOperator = operatorStack[operatorStack.length-1];

            if(opr != ")")
            {
                // current operator has higher precedence than last operator in stack
                if(currentOperator > operators[lastOperator] || lastOperator == "(" || operatorStack.length == 0)
                {
                    operatorStack.push(opr);

                }

                // Curret operator has lower precedence than last operator in stack
                else
                {
                    while(operators[lastOperator] >= currentOperator && operatorStack.length != 0 && lastOperator != "(")
                    {
                        postfix.push(operatorStack.pop());
                        lastOperator = operatorStack[operatorStack.length-1];
                    }

                    operatorStack.push(opr);
                }
            }
            else
            {
                while(lastOperator != "("){
                    postfix.push(operatorStack.pop());
                    lastOperator = operatorStack[operatorStack.length-1];
                }

                operatorStack.pop(); // remove the "("
            }
        }
        else
        {
            postfix.push(infixArray[i]);
        }
    }
    // Pop off remaining operators
    while(operatorStack.length != 0){
        postfix.push(operatorStack.pop());
    }

    return postfix.toString();
}

console.log(infixToPostfix("1+2-3"));
console.log(infixToPostfix("2/5*9"));
console.log(infixToPostfix("2+8*(9-3)/6"));
console.log(infixToPostfix("2+8*9/(3-6)"));

module.exports = {addition, substraction, multiplication, division, infixToPostfix, operate, isNumericString, infixToPostfix}; 