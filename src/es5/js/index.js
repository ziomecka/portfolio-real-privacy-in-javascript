var CarES5 = require("./car.js");

/** Create the default car */
var superCarES5 = new CarES5();

/** Create my car */
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