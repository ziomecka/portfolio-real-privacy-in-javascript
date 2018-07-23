(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function Car(options) {
    let privateObj = {};

    function privateProperties() {
        return function () {
            return privateObj;
        }
    }

    var _ = privateProperties();

    function SubCar(options) {
        options = Object(options);

        _().privateMileage = options.privateMileage || 100000;
        this.brand = options.brand || "Dodge Viper";
        this.color = options.color || "dark red";
        this.publicMileage = options.publicMileage || 1000;
    }

    SubCar.prototype.getPrivateMileage = function () {
        return _().privateMileage;
    };

    return new SubCar(options);
}

module.exports = Car;
},{}],2:[function(require,module,exports){
var CarES5 = require("./car.js");

var superCarES5 = new CarES5();
var myCarES5 = new CarES5({
    "brand": "Renault Clio",
    "color": "blue",
    "privateMileage": 1,
    "publicMileage": 666
});

function createLogs(obj) {
    console.log("Public milage is: " + obj.publicMileage + "km");
    console.log("All own properties are: " + Object.getOwnPropertyNames(obj).join(", "));
    console.log("I can get the PRIVATE MILEAGE via object's method: " + obj.getPrivateMileage() + "km");
}

console.log("Super car data:".toUpperCase());
createLogs(superCarES5);

console.log("My car data:".toUpperCase());
createLogs(myCarES5);
},{"./car.js":1}]},{},[2]);
