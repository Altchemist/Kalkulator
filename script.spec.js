const {addition, substraction, multiplication, division} = require('./script.js');

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

describe('mutliplication', ()=>{
    test('divide 2 positive numbers', ()=>{
        expect(division(4,2)).toBe(2);
    });
});
