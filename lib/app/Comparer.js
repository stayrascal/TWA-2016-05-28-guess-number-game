function Comparer(){

}

Comparer.prototype.compare = function (randomNumber, guessNumber) {
    var samePositionNumbers = this.getSamePositionNumbers(randomNumber, guessNumber);
    var correctNumbers = this.getCorrectNumbers(randomNumber, guessNumber);
    return {status: correctNumbers === randomNumber.length, message: `${correctNumbers}A${samePositionNumbers}B`};
};

Comparer.prototype.getSamePositionNumbers = function (randomNumber, guessNumber) {
    var numbers = new Set((randomNumber + guessNumber).split(''));
    return randomNumber.length + guessNumber.length - numbers.size;
};

Comparer.prototype.getCorrectNumbers = function (randomNumber, guessNumber) {
    for (var i = 0, number = 0, length = randomNumber.length; i < length; i++) {
        if (randomNumber[i] === guessNumber[i]) {
            number++;
        }
    }
    return number;
};

module.exports = Comparer;
