function Validator() {

}

Validator.prototype.isValidNumber = function (number, numberSize, consoleOut) {
    numberSize = numberSize || 4;
    return this.isNumber(number, consoleOut) && this.numberLengthIsValid(number, numberSize, consoleOut) && this.isEachDigitDifferent(number, consoleOut);
};

Validator.prototype.isNumber = function(number, consoleOut) {
    if (isFinite(number)){
        return true;
    }else{
        consoleOut.printLog(`Sorry, the input should be a number`);
        return false;
    }
};

Validator.prototype.numberLengthIsValid = function (number, numberSize, consoleOut) {
    if (parseInt(number).toString().length === numberSize) {
        return true;
    } else {
        consoleOut.printLog(`Sorry, the number length should be ${numberSize}`);
        return false;
    }
};

Validator.prototype.isEachDigitDifferent = function (number, consoleOut) {
    var numbers = new Set(number.split(''));
    if (numbers.size === number.length) {
        return true;
    } else {
        consoleOut.printLog(`Sorry, the number should have different digit`);
        return false;
    }
};

module.exports = Validator;