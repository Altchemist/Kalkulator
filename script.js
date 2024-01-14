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
            let currentOperatorPreference = operators[opr];

            let lastOperator = operatorStack[operatorStack.length-1];

            let lastOperatorPreference = operators[lastOperator];

            if(opr != ")")
            {
                // current operator has higher precedence than last operator in stack
                if(currentOperatorPreference > lastOperatorPreference || lastOperator == "(" || operatorStack.length == 0)
                {
                    operatorStack.push(opr);

                }

                // Curret operator has lower precedence than last operator in stack
                else
                {
                    while(lastOperatorPreference >= currentOperatorPreference && operatorStack.length != 0 && lastOperator != "(")
                    {
                        postfix.push(operatorStack.pop());
                        lastOperator = operatorStack[operatorStack.length-1];
                        lastOperatorPreference = operators[lastOperator];
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

    return postfix;
}

function calculatePostFix(postfix){
    let numberStack = [];
    let number1 = 0;
    let number2 = 0;

    for(i=0; i<postfix.length; i++)
    {
        currentCharacter = postfix[i];

        if(currentCharacter == "*" 
        || currentCharacter == "+" 
        || currentCharacter == "-" 
        || currentCharacter == "/")
        {
            number2 = numberStack.pop();
            number1 = numberStack.pop();

            switch (currentCharacter)
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
            }
        }
        else
        {
            numberStack.push(parseInt(currentCharacter));
        }
    }

    return numberStack.pop();
}

console.log(infixToPostfix("1+2-3"));
console.log(infixToPostfix("2/5*9"));
console.log(infixToPostfix("2+8*(9-3)/6"));
console.log(infixToPostfix("2.2+8*9/(3-6)"));
console.log(calculatePostFix([
    '2', '8', '9',
    '*', '3', '6',
    '-', '/', '+'
  ]));


module.exports = {addition, substraction, multiplication, division, infixToPostfix, calculatePostFix}; 