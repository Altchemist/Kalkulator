const {addition, substraction, multiplication, division, infixToPostfix, calculatePostFix} = require('./script.js');

describe('addition', ()=>{
    test('adds 2 positive numbers', ()=>{
        expect(addition(1,2)).toBe(3);
    });    
})

describe('substraction', ()=>{
    test('substract 2 positive numbers', ()=>{
        expect(substraction(4,2)).toBe(2);
    });

});

describe('multiplication', ()=>{
    test('multiply 2 positive numbers', ()=>{
        expect(multiplication(2,2)).toBe(4);
    });
});

describe('division', ()=>{
    test('divide 2 positive numbers', ()=>
    {
        expect(division(4,2)).toBe(2);
    });

    test('divide numerator with zero', ()=>
    {
        expect(division(4,0)).toBe("infinity");
    })
});

describe("Converting infix expression to postfix expression", ()=>
{
    test("Expression with addition and substraction", ()=>
    {
        expect(infixToPostfix("1+2-3")).toStrictEqual(["1","2","+","3","-"]);
    });

    test("Expression with multiplication and division", ()=>
    {
        expect(infixToPostfix("2/5*9")).toStrictEqual(["2","5","/","9","*"]);
    })

    test("Expression with all four operators; multiplication, division, addition, substraction", ()=>
    {
        expect(infixToPostfix("2+8*9/3-6")).toStrictEqual(['2', '8', '9','*', '3', '/','+', '6', '-']);
    })

    test("Expression with all four operators and brackets", ()=>
    {
        expect(infixToPostfix("2+8*9/(3-6)")).toStrictEqual(['2', '8', '9','*', '3', '6','-', '/', '+']);
    })
})

describe("Calculating postfix expression", ()=>{

    test("Calculating postfix expression with single digit", ()=>
    {
        expect(calculatePostFix(['2', '8', '9','*', '3', '6','-', '/', '+'])).toBe(-22);
    })
})