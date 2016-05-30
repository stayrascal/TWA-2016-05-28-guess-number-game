describe('Test compare result', function(){

    var Comparer = require('../../lib/app/Comparer.js');
    var comparer = new Comparer();

    it('Should return true and 4A4B when random number is 1234 and compare number is 1234', function () {
        var expected = comparer.compare('1234', '1234');
        expect(expected.status).toBeTruthy();
        expect(expected.message).toBe('4A4B');
    });

    it('Should return true and 0A4B when random number is 1234 and compare number is 4321', function () {
        var expected = comparer.compare('1234', '4321');
        expect(expected.status).toBeFalsy();
        expect(expected.message).toBe('0A4B');
    });

    it('Should return true and 0A0B when random number is 1234 and compare number is 5678', function () {
        var expected = comparer.compare('1234', '5678');
        expect(expected.status).toBeFalsy();
        expect(expected.message).toBe('0A0B');
    });

    it('Should return true and 2A2B when random number is 1234 and compare number is 5634', function () {
        var expected = comparer.compare('1234', '5634');
        expect(expected.status).toBeFalsy();
        expect(expected.message).toBe('2A2B');
    });
});