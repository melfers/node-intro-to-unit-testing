const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('checks if a number is divisible by 3 and 5', function() {
        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 5, expected: 'buzz'}, 
            {num: 9, expected: 'fizz'}
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('throws an error if args are not numbers', function() {
        const badInputs = [
            ['molly'],
            ['23'],
            [false]
        ];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});

