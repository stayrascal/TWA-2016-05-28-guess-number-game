function ConsoleOut(){

}

ConsoleOut.prototype.printLog = function(message){
    console.log(message);
};

module.exports = ConsoleOut;