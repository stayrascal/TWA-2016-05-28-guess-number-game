describe('Guess Game Test', function(){
    var Game = require('../../lib/app/Game.js');
    var game;

    beforeEach(function() {
        game = new Game(4);
    });

    it('Should return 4-digit', function(){

        var expectNumber = game.generateRandomNumber();

        expect(parseInt(expectNumber).toString().length).toBe(4);
    })
});