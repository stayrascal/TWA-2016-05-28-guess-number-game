
describe('Test validate rule for number', function(){

    var Validator = require('../../lib/app/Validator.js');
    var ConsoleOut = require('../../lib/app/ConsoleOut.js');


    var validator = new Validator();
    var consoleOut = new ConsoleOut();

    it('Should return true when validate a normal number', function () {
        expect(validator.isValidNumber('1234', 4, consoleOut)).toBeTruthy();
    });

    it('Should return false when validate a number that have same digit', function () {
        expect(validator.isValidNumber('1224', 4, consoleOut)).toBeFalsy();
    });

    it('Should return false when validate a number which length is not equal to 4', function () {
        expect(validator.isValidNumber('224', 4, consoleOut)).toBeFalsy();
        expect(validator.isValidNumber('22434', 4, consoleOut)).toBeFalsy();
    });

    it('Should return false when validate a number that contain character', function () {
        expect(validator.isValidNumber('224e', 4, consoleOut)).toBeFalsy();
    });

    it('Should return false when validate a number which first digit is zero', function () {
        expect(validator.isValidNumber('0224', 4, consoleOut)).toBeFalsy();
    });
});