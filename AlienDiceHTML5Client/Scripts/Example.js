/// <reference path="camel.js" />





(function () {
    //Adds itself to the root (window in a browser or global on server)
    //if camel exists then it will instead add itself to camel
    var root = this;
    var exampleThing;
    if (typeof camel !== 'undefined') {
        root = camel;        
        exampleThing = {};        
        root.exampleThing = exampleThing;
    }
    else {
        exampleThing = root.exampleThing = {};
    }

    reMobile.name = "reMobile";
    reMobile.VERSION = '0.0.1';
    reMobile.models = (function () {
        function models() {
        }
        models.RELand = function () {
            this.id = 0;
            this.landType = 0;
            this.account = 0;
            this.card = 0;
            this.townnumber = 0;
            this.unitType = 0;
            this.unitsA = 0;
            this.unitsB = 0;
            this.influence = 0;
            this.influenceType = 0;
            this.extraInfluence = 0;
            this.acreage = 0;
            this.orderNumber = 1;
            this.landValue = 0;
            this.parentID = "";
            this.acreageFactor = 1;
        };
        models.REOutbldg = function () {
            this.id = 0;
            this.account = 0;
            this.card = 0;
            this.code = 0;
            this.type = 0;
            this.yearBuilt = 0;
            this.units = 0;
            this.unitsB = 0;
            this.grade = 0;
            this.gradePct = 0;
            this.condition = 0;
            this.physicalPct = 0;
            this.functionalPct = 0;
            this.soundValue = 0;
            this.useSoundValue = false;
            this.orderNo = 0;
            this.buildingNumber = 0;
            this.replacementValue = 0;
            this.adjustedValue = 0;
            this.parentID = "";
        };
        models.REDwelling = function () {
            this.id = 0;
            this.account = 0;
            this.card = 0;
            this.parentID = "";
            this.buildingStyle = 0;
            this.dwellingUnits = 0;
            this.otherUnits = 0;
            this.stories = 0;
            this.exteriorWalls = 0;
            this.roof = 0;
            this.sqftMasonry = 0;
            this.open3 = 0;
            this.open4 = 0;
            this.yearBuilt = 0;
            this.yearRemodel = 0;
            this.foundation = 0;
            this.basement = 0;
            this.basementGarageBays = 0;
            this.wetBasement = 0;
            this.sqftBasementLiving = 0;
            this.basementFinishedGrade = 0;
            this.basementFinishedFactor = 0;
            this.open5 = 0;
            this.heat = 0;
            this.percentHeat = 0;
            this.cool = 0;
            this.percentCool = 0;
            this.kitchens = 0;
            this.baths = 0;
            this.rooms = 0;
            this.bedrooms = 0;
            this.fullBaths = 0;
            this.halfBaths = 0;
            this.additionalFixtures = 0;
            this.fireplaces = 0;
            this.layout = 0;
            this.attic = 0;
            this.insulation = 0;
            this.percentUnfinished = 0;
            this.grade = 0;
            this.factor = 0;
            this.sqft = 0;
            this.condition = 0;
            this.percentPhysical = 0;
            this.percentFunctional = 0;
            this.functionalCode = 0;
            this.economicPercent = 0;
            this.economicCode = 0;
            this.sqftLivingArea = 0;
            this.replacementValue = 0;
            this.adjustedValue = 0;
        };
        models.RECustomize = function () {
            this.xCoord = "";
            this.yCoord = "";
            this.open1 = "";
            this.open2 = "";
            this.open3 = "";
            this.open4 = "";
            this.open5 = "";
            this.townNumber = 0;
        };
        models.REPropertyCard = function () {
            this.id = "";
            this.account = 0;
            this.card = 0;
            this.townNumber = 0;
            this.ref1 = "";
            this.ref2 = "";
            this.landCode = 0;
            this.buildingCode = 0;
            this.propertyCode = 0;
            this.treeGrowthYear = 0;
            this.xCoord = "";
            this.yCoord = "";
            this.acreage = 0;
            this.streetNumber = 0;
            this.apartment = "";
            this.streetName = "";
            this.parentID = "";
            this.frontage = 0;
            this.comment = "";
        };
        models.RECommercial = function () {
            this.id = 0;
            this.account = 0;
            this.card = 0;
            this.buildingNumber = 0;
            this.occupancyCode = 0;
            this.dwellingUnits = 0;
            this.bldgClass = 0;
            this.quality = 0;
            this.grade = 0;
            this.exteriorWalls = 0;
            this.stories = 0;
            this.height = 0;
            this.floor = 0;
            this.perimeter = 0;
            this.heatCode = 0;
            this.yearBuilt = 0;
            this.yearRemodel = 0;
            this.condition = 0;
            this.physicalPercent = 0;
            this.functionalPercent = 0;
            this.sqft = 0;
            this.replacementValue = 0;
            this.adjustedValue = 0;
            this.parentID = "";
            this.economicPercent = 0;
        };
        models.REProperty = function () {
            this.id = "";
            this.account = 0;
            this.landValue = 0;
            this.bldgValue = 0;
            this.tranCode = 0;
            this.mapLot = "";
            this.inspected = "";
            this.entranceCode = 0;
            this.informationCode = 0;
            this.changed = false;
            this.acreage = 0;
            this.taxAcquired = false;
            this.inBankruptcy = false;
            this.revocableLivingTrust = false;
            this.secondaryZone = 0;
            this.useSecondaryZone = false;
            this.neighborhood = 0;
            this.zone = 0;
            this.streetType = 0;
            this.topography1 = 0;
            this.topography2 = 0;
            this.utilities1 = 0;
            this.utilities2 = 0;
            this.streetNumber = 0;
            this.apartment = "";
            this.streetName = "";
            this.exemptCode = [0, 0, 0];
            this.exemptValue = [0, 0, 0];
            this.exemptPercent = [0, 0, 0];
        };
        return models;
    })();

    reMobile.viewModels.Land = function () {
    };
    reMobile.viewModels.Property = function () {
    };
    reMobile.viewModels.Building = function () {
    };
    reMobile.viewModels.Customize = function () {
    };
    reMobile.views.Customize = root.views.View.extend({
        init: function () {
            this.name = "Customize";
        }
    });
    //    reMobile.views.Customize = (function () {
    //        function Customize() {
    //        }
    //        Customize.prototype = new root.views.View();
    //        Customize.constructor = Customize;
    //        return Customize;
    //    })();


    //return reMobile;
}).call(this);


var woogy = new camel.apps.reMobile.views.Customize();






var MainApp = {
    IsOnline: function () {
    },
    IsMobile: function (){
    },
    Views: [],
    ViewModels: [],
    AppModules: []
};

(function () {
    var root = this;
    var App;
    if (typeof camel !== 'undefined') {
        root = camel;
    }
    App = root.App = {};
    App.VERSION = '0.0.1';
    isOnline = function (){
    };
    
}).call(this);

