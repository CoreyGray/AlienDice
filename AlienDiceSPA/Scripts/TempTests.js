/// <reference path="jquery-1.7.1.js" />



var performEchoTest = function () {
   
    //send a get request that just sends back the same string you sent
    //jQuery.ajax('http://localhost:55954/api/test', {}).done(function () { alert("the request came back"); });
    // $.get("http://localhost:55954/api/test/" + 'test data' , 'test data', function (data) { alert(data); }, "html");
    $.getJSON("http://localhost:55954/api/test/" + 'test data', { q: 'test data' }, function (data) { alert('Player Number is ' + data.PlayerNumber); });
};