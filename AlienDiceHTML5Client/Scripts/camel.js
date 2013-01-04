//camel stands for Camel is an Application Module Extensible Library
/// <reference path="knockout-2.1.0.js" />
/// <reference path="knockout.mapping-latest.js" />


//from John Resig
/* Simple JavaScript Inheritance
* By John Resig http://ejohn.org/
* MIT Licensed.
*/
// Inspired by base2 and Prototype
(function () {
    var initializing = false, fnTest = /xyz/.test(function () { xyz; }) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    this.Class = function () {
     };

    // Create a new Class that inherits from this class
    Class.extend = function (prop) {
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
         (function (name, fn) {
             return function () {
                 var tmp = this._super;

                 // Add a new ._super() method that is the same method
                 // but on the super-class
                 this._super = _super[name];

                 // The method only need to be bound temporarily, so we
                 // remove it when we're done executing
                 var ret = fn.apply(this, arguments);
                 this._super = tmp;

                 return ret;
             };
         })(name, prop[name]) :
         prop[name];
        }

        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if (!initializing && this.init)
                this.init.apply(this, arguments);
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.prototype.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        return Class;
    };
})();

//from mozilla .org
(function () {
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
            "use strict";
            if (this == null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = 0;
            if (arguments.length > 0) {
                n = Number(arguments[1]);
                if (n != n) { // shortcut for verifying if it's NaN
                    n = 0;
                } else if (n != 0 && n != Infinity && n != -Infinity) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            if (n >= len) {
                return -1;
            }
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                    return k;
                }
            }
            return -1;
        };
    }
})();

(function () {
    var root = this;
    var camel;
    camel = root.camel = {
    };
    camel.VERSION = '0.0.1';
    if (typeof ko !== 'undefined') {
        camel.ob = ko;
    }
    var generateUUID = function () {
        var d = new Date().getTime();
        var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = d / 16 | 0;
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return id;
    };
    camel.UUID = Class.extend({
        init: function (){
            this.id = generateUUID();
        }        
    });    
    camel.UUID.prototype.toString = (function () {
        return this.id;
    })();

    //uid returns an integer that is unique to this session. For a universally unique id create a new UUID
    camel.Uid = (function () {
        var id = 0; return function () {
            return ++id;
        };
    })();    
    camel.isOnline = function () {

    };
    camel.ViewModel = function () {
        this.id = new camel.UUID();
        this.name = "";
    };
}).call(this);

(function () {
    var root = this;
    var services;
    if (typeof camel !== 'undefined') {
        root = camel;
    }
    services = root.services = {};
    services.ServiceLocator = (function () {
        function ServiceLocator(){
        }
        var servloc = {};
        ServiceLocator.prototype.register = function (name,serv){
            servloc[name] = serv;
        };
        ServiceLocator.prototype.unRegister = function (name){
            if (servloc.hasOwnProperty(name)){
                delete servloc[name];
            }
        };
        ServiceLocator.prototype.getService = function (name){
            if (servloc.hasOwnProperty(name)){
                return servloc[name];
            }
            else {
                return null;
            }
        };
        return ServiceLocator;
    })();        
    var servloc = new services.ServiceLocator();
    services.register = function (name,serv) {
        servloc.register(name,serv);
    };
    services.unregister = function (name) {
        servloc.unRegister(name);
    };
    services.getService = function (name){
        return servloc.getService(name);
    };
}).call(this);

(function () {
    var root = this;
    var apps;
    if (typeof camel !== 'undefined') {
        root = camel;
    }
    apps = root.apps = {};
    var appModules = new Class();
    apps.appModule = Class.extend({
        init: function (){
            this.name = "";
            this.models = new Class();
            this.views = new Class();
            this.viewModels = new Class();
        }
    });
//    apps.AppModule = function () {
//        return {
//            name: "",
//            models:{},
//            views:{},
//            viewModels:{}
//        };
//    };
    apps.register = function (appMod) {
        if (appMod instanceof(apps.appModule))
        {
            appModules[appMod.name] = appMod;
        }
    };
    apps.unRegister = function (appMod) {
        //TODO: code to dispose of module
        if (appMod instanceof(apps.appModule)){        
            if(appModules.hasOwnProperty(appMod.name)){
                delete appModules[appMod.name];
            }
        }
    };
})();
 
(function (){
        var root = this;
        var pub;
        if(typeof camel !== 'undefined') {
            root = camel;
        }
        pub = root.pub = {};
        pub.PubSub = (function () {
        function PubSub() {
        }
        var topics = {};
        PubSub.prototype.subscribe = function (topic, callback) {
            if (!topics.hasOwnProperty(topic)) {
                topics[topic] = []; //empty list of subscribers
            }
            var token = new camel.UUID().toString;
            topics[topic].push({ callback: callback, token: token });
            return token;
        };
        PubSub.prototype.unsubscribe = function (token) {
            for (var t in topics) {                
                var len = topics[t].length;
                for ( var i = 0; i < len; i++ ){
                    if ( topics[t][i].token === token ){
                       topics[t].splice( i, 1 );
                       return token;
                       }
                 }                
            }
        };
        PubSub.prototype.publish = function (topic, data) {
        };
        return PubSub;
    })();
        var messenger = new pub.PubSub();
        pub.subscribe = function (topic, callback) {
            return messenger.subscribe(topic, callback);
        };
        pub.unsubscribe = function (token) {
          messenger.unsubscribe(token);
        };
        pub.publish = function (topic, data) {
            messenger.publish(topic, data);
        };
   })();
   
(function () {
    var root = this;
    var views;
    if(typeof camel !== 'undefined') {
        root = camel;
    }
    views = root.views = {};
    views.View = Class.extend({
        init: function (){
            this.id = new camel.UUID();
            this.name = "";
            this.template = "";
            this.datacontext = new Class();
        }
    });     
}).call(this);


