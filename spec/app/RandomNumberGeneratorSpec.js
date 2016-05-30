describe('Validate random number', function(){

    var RandomNumberGenerator = require('../../lib/app/RandomNumberGenerator.js');
    var generator = new RandomNumberGenerator();

    it('Should return 4-digits and the return should be a number when call generate random number', function () {
        var expectNumber = generator.generateRandomNumber(4);

        expect(parseInt(expectNumber).toString().length).toBe(4);
    });

    it('The each digit of random number should different', function () {
        var expectNumber = generator.generateRandomNumber(4);
        var numbers = new Set(expectNumber.split(''));

        expect(numbers.size).toBe(expectNumber.length);
    });
});