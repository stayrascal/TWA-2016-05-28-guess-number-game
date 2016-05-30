function main(){
    var Game = require('./lib/app/Game.js');
    var Validator = require('./lib/app/Validator.js');
    var Comparer = require('./lib/app/Comparer.js');
    var RandomNumberGenerator = require('./lib/app/RandomNumberGenerator.js');
    var Scanner = require('./lib/app/Scanner.js');
    var ConsoleOut = require('./lib/app/ConsoleOut.js');

    var game = new Game(6);
    var validator = new Validator();
    var comparer = new Comparer();
    var generator = new RandomNumberGenerator();
    var scanner = new Scanner();
    var console = new ConsoleOut();

    game.run(validator, comparer, generator, scanner, console);

}
main();