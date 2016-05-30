function Game(gameTimes) {
    this.gameTimes = gameTimes;
}

Game.prototype.run = function (validator, comparer, generator, scanner, consoleOut) {
    var randomNumber = generator.generateRandomNumber(4);
    var guessNumber = '';
    while (this.gameTimes--) {
        guessNumber = scanner.getUserInputNumber('Please input 4-digits number:'+"\n", validator, consoleOut);
        var result = comparer.compare(randomNumber, guessNumber);
        if (result.status) {
            consoleOut.printLog('Congratulation!');
            return;
        } else {
            consoleOut.printLog(result.message);
        }
    }
    consoleOut.printLog('Game Over!');
};

module.exports = Game;
