describe('Guess Game Test', function () {
    var Game = require('../../lib/app/Game.js');
    var game;

    beforeEach(function () {
        game = new Game(4, 6);

        spyOn(game, 'generateRandomNumber').and.returnValue('1234');
        spyOn(console, 'log');
    });

    describe('Validate random number', function(){
        it('Should return 4-digits when call generate random number', function () {
            var expectNumber = game.generateRandomNumber();

            expect(parseInt(expectNumber).toString().length).toBe(4);
        });

        it('The each digit of random number should different', function () {
            var expectNumber = game.generateRandomNumber();
            var numbers = new Set(expectNumber.split(''));

            expect(numbers.size).toBe(expectNumber.length);
        });
    });

    describe('Test validate rule for number', function(){
        it('Should return true when validate a normal number', function () {
            expect(game.isValidNumber('1234')).toBeTruthy();
        });

        it('Should return false when validate a number that have same digit', function () {
            expect(game.isValidNumber('1224')).toBeFalsy();
        });

        it('Should return false when validate a number which length is not equal to 4', function () {
            expect(game.isValidNumber('224')).toBeFalsy();
            expect(game.isValidNumber('22434')).toBeFalsy();
        });

        it('Should return false when validate a number that contain character', function () {
            expect(game.isValidNumber('224e')).toBeFalsy();
        });

        it('Should return false when validate a number which first digit is zero', function () {
            expect(game.isValidNumber('0224')).toBeFalsy();
        });
    });


    describe('Test guess result', function(){
        it('Should return true and 4A4B when random number is 1234 and guess number is 1234', function () {
            var expected = game.guess('1234', '1234');
            expect(expected.status).toBeTruthy();
            expect(expected.message).toBe('4A4B');
        });

        it('Should return true and 0A4B when random number is 1234 and guess number is 4321', function () {
            var expected = game.guess('1234', '4321');
            expect(expected.status).toBeFalsy();
            expect(expected.message).toBe('0A4B');
        });

        it('Should return true and 0A0B when random number is 1234 and guess number is 5678', function () {
            var expected = game.guess('1234', '5678');
            expect(expected.status).toBeFalsy();
            expect(expected.message).toBe('0A0B');
        });

        it('Should return true and 2A2B when random number is 1234 and guess number is 5634', function () {
            var expected = game.guess('1234', '5634');
            expect(expected.status).toBeFalsy();
            expect(expected.message).toBe('2A2B');
        });
    });

    describe('Test console log', function(){
        it('Should log Congratulation when first guess number is 1234 and random number is 1234', function () {
            spyOn(game, 'getUserInputNumber').and.returnValue('1234');

            game.run();

            expect(console.log).toHaveBeenCalledWith('Congratulation!');
        });

        it('Should log Congratulation when guess success on second times and random number is 1234', function () {
            spyOn(game, 'getUserInputNumber').and.returnValues('2345', '1234');

            game.run();

            expect(console.log).toHaveBeenCalledWith('0A3B');
            expect(console.log).toHaveBeenCalledWith('Congratulation!');
        });

        it('Should log Congratulation when guess success on sixth times and random number is 1234', function () {
            spyOn(game, 'getUserInputNumber').and.returnValues('2345', '2345', '2345', '2345', '2345', '1234');

            game.run();

            expect(console.log).toHaveBeenCalledWith('Congratulation!');
        });

        it('Should log Game Over when guess failure and random number is 1234', function () {
            spyOn(game, 'getUserInputNumber').and.returnValues('2345', '2345', '2345', '2345', '2345', '2345');

            game.run();

            expect(console.log).toHaveBeenCalledWith('Game Over!');
        });

        it('Should return 5 when guess success first time and get remain game chane', function () {
            spyOn(game, 'getUserInputNumber').and.returnValues('1234');

            game.run();

            expect(game.gameTimes).toBe(5);
        });
    });


});