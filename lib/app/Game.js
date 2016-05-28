function Game(numberSize) {
    this.numberSize = numberSize;
}

Game.prototype.generateRandomNumber = function(){
    var result = [];
    var numbers = [9,8,7,6,5,4,3,2,1,0];
    var firstNumberIndex = Math.floor(Math.random() * (numbers.length - 1));
    result.push(numbers.splice(firstNumberIndex,1));
    while (result.length != this.numberSize){
        var index = Math.floor(Math.random() * (numbers.length));
        result.push(numbers.splice(index,1));
    }
    return result.join('');
};

module.exports = Game;