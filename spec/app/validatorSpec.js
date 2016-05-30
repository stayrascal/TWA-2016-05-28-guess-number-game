
describe('Test validate rule for number', function(){

    var Validator = require('../../lib/app/Validator.js');
    var validator = new Validator();

    it('Should return true when validate a normal number', function () {
        expect(validator.isValidNumber('1234')).toBeTruthy();
    });

    it('Should return false when validate a number that have same digit', function () {
        expect(validator.isValidNumber('1224')).toBeFalsy();
    });

    it('Should return false when validate a number which length is not equal to 4', function () {
        expect(validator.isValidNumber('224')).toBeFalsy();
        expect(validator.isValidNumber('22434')).toBeFalsy();
    });

    it('Should return false when validate a number that contain character', function () {
        expect(validator.isValidNumber('224e')).toBeFalsy();
    });

    it('Should return false when validate a number which first digit is zero', function () {
        expect(validator.isValidNumber('0224')).toBeFalsy();
    });
});