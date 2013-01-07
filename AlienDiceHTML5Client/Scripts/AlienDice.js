/// <reference path="camel.js" />


(function () {
    //Adds itself to the root (window in a browser or global on server)
    //if camel exists then it will instead add itself to camel
    var root = this;
    var alienDice;
    if (typeof camel !== 'undefined') {
        root = camel;
        alienDice = new root.apps.AppModule();
        root.RegisterModule(alienDice);
        root.apps.alienDice = alienDice;
    }
    else {
        alienDice = root.alienDice = {};
        alienDice.models = {};
        alienDice.viewModels = {};
        alienDice.views = {};
    }

    alienDice.name = "AlienDice";
    alienDice.VERSION = '0.0.1';

    alienDice.models = (function () {
        function models() {
        }
        models.ExampleModel = function () {
            this.id = 0;
            this.something = "";
        };
        return models;
    })();

}).call(this);