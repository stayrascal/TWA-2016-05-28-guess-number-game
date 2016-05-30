function Validator() {

}

Validator.prototype.isValidNumber = function (number, numberSize) {
    numberSize = numberSize || 4;
    return this.isNumber(number) && this.numberLengthIsValid(number, numberSize) && this.isEachDigitDifferent(number);
};

Validator.prototype.isNumber = function(number) {
    if (isFinite(number)){
        return true;
    }else{
        console.log(`The input should be a number`);
        return false;
    }
};

Validator.prototype.numberLengthIsValid = function (number, numberSize) {
    if (parseInt(number).toString().length === numberSize) {
        return true;
    } else {
        console.log(`The number length should be ${numberSize}`);
        return false;
    }
};

Validator.prototype.isEachDigitDifferent = function (number) {
    var numbers = new Set(number.split(''));
    if (numbers.size === number.length) {
        return true;
    } else {
        console.log(`The number should have different digit`);
        return false;
    }
};

module.exports = Validator;