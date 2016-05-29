function Game(numberSize) {
    this.numberSize = numberSize;
}

Game.prototype.generateRandomNumber = function () {
    /*var result = [];
     var numbers = [9,8,7,6,5,4,3,2,1,0];
     var firstNumberIndex = Math.floor(Math.random() * (numbers.length - 1));
     result.push(numbers.splice(firstNumberIndex,1));
     while (result.length != this.numberSize){
     var index = Math.floor(Math.random() * (numbers.length));
     result.push(numbers.splice(index,1));
     }
     return result.join('');*/

    var numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    while (numbers.length != this.numberSize) {
        var index = Math.floor(Math.random() * (numbers.length));
        numbers.splice(index, 1);
    }
    return numbers.join('');
};

Game.prototype.randomNumberIsValid = function (number) {
    var numbers = new Set(number.split(''));
    return numbers.size === this.numberSize && parseInt(number).toString().length === 4;
};

Game.prototype.guess = function (randomNumber, guessNumber) {
    var samePositionNumbers = this.getSamePositionNumbers(randomNumber, guessNumber);
    var correctNumbers = this.getCorrectNumbers(randomNumber, guessNumber);
    return {status: correctNumbers === randomNumber.length, message: `${correctNumbers}A${samePositionNumbers}B`};
};

Game.prototype.getSamePositionNumbers = function (randomNumber, guessNumber) {
    var numbers = new Set((randomNumber + guessNumber).split(''));
    return randomNumber.length + guessNumber.length - numbers.size;
};

Game.prototype.getCorrectNumbers = function (randomNumber, guessNumber) {
    for (var i = 0, number = 0, length = randomNumber.length; i < length; i++) {
        if (randomNumber[i] === guessNumber[i]) {
            number++;
        }
    }
    return number;
};

Game.prototype.getUserInputNumber = function() {
   return '2345';
};

Game.prototype.run = function(){
    var gameTimes = 6;
    var randomNumber = this.generateRandomNumber();
    while (gameTimes--){
        var guessNumber = this.getUserInputNumber();
        var result = this.guess(randomNumber, guessNumber);
        if (result.status){
            console.log('Congratulation!');
            return;
        } else {
            console.log(result.message);
        }
    }
    console.log('Game Over!');
};

module.exports = Game;