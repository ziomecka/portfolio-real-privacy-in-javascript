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