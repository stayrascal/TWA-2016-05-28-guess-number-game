function Game(gameTimes) {
    this.gameTimes = gameTimes;
}

Game.prototype.getUserInputNumber = function (tipMessage, validator) {
    var readlineSync = require('readline-sync');
    var answer = readlineSync.question(tipMessage);
    while (!validator.isValidNumber(answer)){
        answer = readlineSync.question(tipMessage);
    }
    return answer;
};

Game.prototype.run = function (validator, comparer, generator) {
    var randomNumber = generator.generateRandomNumber();
    var guessNumber = '';
    while (this.gameTimes--) {
        guessNumber = this.getUserInputNumber('Please input 4-digits number'+"\n", validator);
        var result = comparer.compare(randomNumber, guessNumber);
        if (result.status) {
            console.log('Congratulation!');
            return;
        } else {
            console.log(result.message);
        }
    }
    console.log('Game Over!');
};

module.exports = Game;

