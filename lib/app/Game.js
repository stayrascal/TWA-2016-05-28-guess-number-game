function Game(numberSize, gameTimes) {
    this.numberSize = numberSize;
    this.gameTimes = gameTimes;
}

Game.prototype.generateRandomNumber = function () {
    var numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    while (numbers.length != this.numberSize) {
        var index = Math.floor(Math.random() * (numbers.length));
        numbers.splice(index, 1);
    }
    return numbers.join('');
};

Game.prototype.isValidNumber = function (number) {
    var numbers = new Set(number.split(''));
    return numbers.size === number.length && parseInt(number).toString().length === this.numberSize;
};

/*Game.prototype.numberLengthIsValid = function (number) {
 if (parseInt(number).toString().length === this.numberSize) {
 return true;
 } else {
 console.log(`The number length should be ${this.numberSize}`);
 return false;
 }
 };

 Game.prototype.isEachDigitDifferent = function (number) {
 var numbers = new Set(number.split(''));
 if (numbers.size === number.length) {
 return true;
 } else {
 console.log(`The number should have different digit`);
 return false;
 }
 };*/

Game.prototype.guess = function (randomNumber, guessNumber) {
    var getSamePositionNumbers = function (randomNumber, guessNumber) {
        var numbers = new Set((randomNumber + guessNumber).split(''));
        return randomNumber.length + guessNumber.length - numbers.size;
    };

    var getCorrectNumbers = function (randomNumber, guessNumber) {
        for (var i = 0, number = 0, length = randomNumber.length; i < length; i++) {
            if (randomNumber[i] === guessNumber[i]) {
                number++;
            }
        }
        return number;
    };

    var samePositionNumbers = getSamePositionNumbers(randomNumber, guessNumber);
    var correctNumbers = getCorrectNumbers(randomNumber, guessNumber);
    return {status: correctNumbers === randomNumber.length, message: `${correctNumbers}A${samePositionNumbers}B`};
};

Game.prototype.getUserInputNumber = function () {
    return '2345';
};

Game.prototype.run = function () {
    var randomNumber = this.generateRandomNumber();
    var guessNumber = this.getUserInputNumber();
    while (this.gameTimes-- && this.isValidNumber(guessNumber)) {
        var result = this.guess(randomNumber, guessNumber);
        if (result.status) {
            console.log('Congratulation!');
            return;
        } else {
            console.log(result.message);
            guessNumber = this.getUserInputNumber();
        }
    }
    console.log('Game Over!');
};

module.exports = Game;

/*
 something puzzle me
 1. whether the private function need to test?
 */
