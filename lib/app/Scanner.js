function Scanner() {
}

Scanner.prototype.getUserInputNumber = function (tipMessage, validator, consoleOut) {
    var readlineSync = require('readline-sync');
    var answer = readlineSync.question(tipMessage);
    while (!validator.isValidNumber(answer, 4, consoleOut)) {
        answer = readlineSync.question(tipMessage);
    }
    return answer;
};

module.exports = Scanner;