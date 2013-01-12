

require.config({
    paths: {
        jquery: 'jquery-1.8.3.min',
        knockout: 'knockout-2.2.0'
    }
});

require(["jquery", "knockout", "camel", "AlienDice", "AlienDiceUI", "domReady!"], function ($, ko, camel, alienDice, alienDiceUI) {
    //start the app
    
    alienDice.init();
});
