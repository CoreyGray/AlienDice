/// <reference path="require.js" />
/// <reference path="camel.js" />

// Do not add this directly to the APP.  This should be a generic dice engine not specific to the particular page using it
// Could be added to the root as an object or you could register it as a "Dice Engine" service
//define(["camel"], function (camel) {
//    var diceEngine = {};
//    diceEngine.dieType = Class.extend({
//        init: function () {
//            //default to a standard 6 sided die
//            this.sides = 6;
//        }
//    });
//    diceEngine.rollDie = function () {
//        //side rolled = (Math.floor(Math.random()* number of sides)) + 1
//    };
//    var dieTypes = new camel.services.ServiceLocator();
//    //add a die type to the collection
//    diceEngine.register = function (name, dType) {
//        dieTypes.register(name, dType);
//    };
//    //remove a die type from the collection
//    diceEngine.unregister = function (name) {
//        dieType.unRegister(name);
//    };
//    //get a die type by name
//    diceEngine.getDieType = function (name) {
//        return dieTypes.getService(name);
//    };
//    return diceEngine;
//}
//);


//The closure way without requirejs
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

  
    var dieTypes = {};
    //add a die type to the collection
    diceEngine.register = function (name, dType) {
        dieTypes[name] = dtype;
    };
    //remove a die type from the collection
    diceEngine.unregister = function (name) {
        if (dieTypes.hasOwnProperty(name)) {
            delete dieTypes[name];
        }        
    };
    //get a die type by name
    diceEngine.getDieType = function (name) {
        if (dieTypes.hasOwnProperty(name)) {
            return dieTypes[name];
        }
        else {
            return null;
        }
    };
}).call(this);