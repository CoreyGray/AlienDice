/// <reference path="jquery-1.8.3.js" />




var performEchoTest = function (server) {
    
    $.support.cors = true; //need to do this since in testing the site runs as one domain and the ui runs as another
    //send a get request that just sends back the same string you sent
    $.ajaxSetup({
        error: function (xhr, status, error) {
            alert("An AJAX error occured: " + status + "\nError: " + error + "\nError detail: " + xhr.responseText);
        }
    });
    
    //jQuery.ajax('http://localhost:55954/api/test', {}).done(function () { alert("the request came back"); });
    $.getJSON(server + "/api/games/moves/" + 'x567' , 'test data', function (data) { alert(data); });
   // $.getJSON("http://localhost:55954/api/games/" + 'version', { q: 'test data' }, function (data) { alert('Player Number is ' + data.PlayerNumber); });    
    
   // $.getJSON(server + "/api/games/5",null , function (data) { alert('Player Number is ' + data.PlayerNumber); });
};