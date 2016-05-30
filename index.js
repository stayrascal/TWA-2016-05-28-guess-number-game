function main(){
    var Game = require('./lib/app/Game.js');
    var game = new Game(6);

    var Validator = require('./Validator.js');
    var Comparer = require('./Comparer.js');
    var RandomNumberGenerator = require('./RandomNumberGenerator.js');
    var validator = new Validator();
    var comparer = new Comparer();
    var generator = new RandomNumberGenerator();
    game.run(validator, comparer, generator);

}
