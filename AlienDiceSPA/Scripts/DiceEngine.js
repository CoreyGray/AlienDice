/// <reference path="camel.js" />

// Do not add this directly to the APP.  This should be a generic dice engine not specific to the particular page using it
// Could be added to the root as an object or you could register it as a "Dice Engine" service

(function () {
    var root = this;
    if (typeof camel !== 'undefined') {
        root = camel;
        //add it to the root
        diceEngine = root.diceEngine = {};
        //or add it as a service.  This has to assume camel framework though
        //root.services.register('DiceEngine', diceEngine);
    }
    else {
        diceEngine = root.diceEngine = {};        
    }

    diceEngine.dieType = Class.extend({
        init: function () {
            //default to a standard 6 sided die
            this.sides = 6;
        }
    });
    
    diceEngine.rollDie = function () {
         //side rolled = (Math.floor(Math.random()* number of sides)) + 1
    };

    //just use camel's service locator since it's the exact functionality we want
    //camel's service locator is basically a dictionary because of how javascript works
    var dieTypes = new camel.services.ServiceLocator();
    //add a die type to the collection
    diceEngine.register = function (name, dType) {
        dieTypes.register(name, dType);
    };
    //remove a die type from the collection
    diceEngine.unregister = function (name) {
        dieType.unRegister(name);
    };
    //get a die type by name
    diceEngine.getDieType = function (name) {
        return dieTypes.getService(name);
    };
}).call(this);