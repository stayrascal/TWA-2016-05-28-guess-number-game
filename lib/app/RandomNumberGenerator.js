function RandomNumberGenerator(){

}

RandomNumberGenerator.prototype.generateRandomNumber = function (numberSize) {
    var numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    while (numbers.length != numberSize) {
        var index = Math.floor(Math.random() * (numbers.length));
        numbers.splice(index, 1);
    }
    return numbers.join('');
};

module.exports = RandomNumberGenerator;