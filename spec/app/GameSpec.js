describe('Guess Game Test', function () {
    var Game = require('../../lib/app/Game.js');
    var RandomNumberGenerator = require('../../lib/app/RandomNumberGenerator.js');
    var Validator = require('../../lib/app/Validator.js');
    var Comparer = require('../../lib/app/Comparer.js');
    var Scanner = require('../../lib/app/Scanner.js');
    var ConsoleOut = require('../../lib/app/ConsoleOut.js');
    var game, generator, validator, comparer, scanner, consoleOut;

    beforeEach(function () {
        game = new Game(6);
        generator = new RandomNumberGenerator();
        validator = new Validator();
        comparer = new Comparer();
        scanner = new Scanner();
        consoleOut = new ConsoleOut();


        spyOn(generator, 'generateRandomNumber').and.returnValue('1234');
        spyOn(consoleOut, 'printLog');
    });

    describe('Test console log', function(){
        it('Should log Congratulation when first guess number is 1234 and random number is 1234', function () {
            spyOn(scanner, 'getUserInputNumber').and.returnValue('1234');

            game.run(validator, comparer, generator, scanner, consoleOut);

            expect(consoleOut.printLog).toHaveBeenCalledWith('Congratulation!');
        });

        it('Should log Congratulation when guess success on second times and random number is 1234', function () {
            spyOn(scanner, 'getUserInputNumber').and.returnValues('2345', '1234');

            game.run(validator, comparer, generator, scanner, consoleOut);

            expect(consoleOut.printLog).toHaveBeenCalledWith('0A3B');
            expect(consoleOut.printLog).toHaveBeenCalledWith('Congratulation!');
        });

        it('Should log Congratulation when guess success on sixth times and random number is 1234', function () {
            spyOn(scanner, 'getUserInputNumber').and.returnValues('2345', '2345', '2345', '2345', '2345', '1234');

            game.run(validator, comparer, generator, scanner, consoleOut);

            expect(consoleOut.printLog).toHaveBeenCalledWith('Congratulation!');
        });

        it('Should log Game Over when guess failure and random number is 1234', function () {
            spyOn(scanner, 'getUserInputNumber').and.returnValues('2345', '2345', '2345', '2345', '2345', '2345');

            game.run(validator, comparer, generator, scanner, consoleOut);

            expect(consoleOut.printLog).toHaveBeenCalledWith('Game Over!');
        });

        it('Should return 5 when guess success first time and get remain game chane', function () {
            spyOn(scanner, 'getUserInputNumber').and.returnValues('1234');

            game.run(validator, comparer, generator, scanner, consoleOut);

            expect(game.gameTimes).toBe(5);
        });

        it('Should return 5 when input wrong format first time and guess success second time and get remain game chane', function () {
            spyOn(scanner, 'getUserInputNumber').and.returnValues('1234er', '1234');

            game.run(validator, comparer, generator, scanner, consoleOut);

            expect(game.gameTimes).toBe(5);
        });
    });


});