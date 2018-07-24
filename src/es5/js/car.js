/** The Car function wraps the actual SubCar class.
 *  The Car function creates a closure in which the private object is kept.
 *  SubCar's methods can access this closure.
 */
function Car(options) {
    
    /** Private object available via closure */
    let privateObj = {};

    function privateProperties() {
        return function () {
            return privateObj;
        }
    }

    /** The variable will store function that returns the private object.
     *  The function is available via closure not via class!
     */
    var _ = privateProperties();

    function SubCar(options) {
        options = Object(options);

        /** Add private property to the private object. */
        _().privateMileage = options.privateMileage || 100000;
        
        /** Public properties */
        this.brand = options.brand || "Dodge Viper";
        this.color = options.color || "dark red";
        this.publicMileage = options.publicMileage || 1000;
    }

    SubCar.prototype.getPrivateMileage = function () {
        /** The method accesses the private property via function in closure. */
        return _().privateMileage;
    };

    SubCar.prototype.destroy = function () {
        privateObj = null;
        _ = null;
    }

    /** Create the car */
    return new SubCar(options);
}

module.exports = Car;