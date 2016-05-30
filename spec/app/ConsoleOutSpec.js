describe('Console log test', function(){
    var ConsoleOut = require('../../lib/app/ConsoleOut.js');
    var out = new ConsoleOut();
   it('Should log message when call print method', function(){
       spyOn(console, 'log');
        out.printLog("message");

       expect(console.log).toHaveBeenCalledWith("message");

   });
});