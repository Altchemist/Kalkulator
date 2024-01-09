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

module.exports = {addition, substraction, multiplication, division}; 