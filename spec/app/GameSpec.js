describe('Guess Game Test', function () {
    var Game = require('../../lib/app/Game.js');
    var RandomNumberGenerator = require('../../lib/app/RandomNumberGenerator.js');
    var Validator = require('../../lib/app/Validator.js');
    var Comparer = require('../../lib/app/Comparer.js');
    var game, generator, validator, comparer;

    beforeEach(function () {
        game = new Game(6);
        generator = new RandomNumberGenerator();
        validator = new Validator();
        comparer = new Comparer();


        spyOn(generator, 'generateRandomNumber').and.returnValue('1234');
        spyOn(console, 'log');
    });



    //describe('Validate user input', function(){
    //    it('Should return 4-digits and the return should be a number when call get user input', function () {
    //        var expectNumber = game.getUserInputNumber();
    //
    //        expect(parseInt(expectNumber).toString().length).toBe(4);
    //    });
    //
    //    it('The each digit of number user input should different', function () {
    //        var expectNumber = game.getUserInputNumber();
    //        var numbers = new Set(expectNumber.split(''));
    //
    //        expect(numbers.size).toBe(expectNumber.length);
    //    });
    //});

    describe('Test console log', function(){
        it('Should log Congratulation when first guess number is 1234 and random number is 1234', function () {
            spyOn(game, 'getUserInputNumber').and.returnValue('1234');

            game.run(validator, comparer, generator);

            expect(console.log).toHaveBeenCalledWith('Congratulation!');
        });

        it('Should log Congratulation when guess success on second times and random number is 1234', function () {
            spyOn(game, 'getUserInputNumber').and.returnValues('2345', '1234');

            game.run(validator, comparer, generator);

            expect(console.log).toHaveBeenCalledWith('0A3B');
            expect(console.log).toHaveBeenCalledWith('Congratulation!');
        });

        it('Should log Congratulation when guess success on sixth times and random number is 1234', function () {
            spyOn(game, 'getUserInputNumber').and.returnValues('2345', '2345', '2345', '2345', '2345', '1234');

            game.run(validator, comparer, generator);

            expect(console.log).toHaveBeenCalledWith('Congratulation!');
        });

        it('Should log Game Over when guess failure and random number is 1234', function () {
            spyOn(game, 'getUserInputNumber').and.returnValues('2345', '2345', '2345', '2345', '2345', '2345');

            game.run(validator, comparer, generator);

            expect(console.log).toHaveBeenCalledWith('Game Over!');
        });

        it('Should return 5 when guess success first time and get remain game chane', function () {
            spyOn(game, 'getUserInputNumber').and.returnValues('1234');

            game.run(validator, comparer, generator);

            expect(game.gameTimes).toBe(5);
        });

        it('Should return 5 when input wrong format first time and guess success second time and get remain game chane', function () {
            spyOn(game, 'getUserInputNumber').and.returnValues('1234er', '1234');

            game.run(validator, comparer, generator);

            expect(game.gameTimes).toBe(5);
        });
    });


});