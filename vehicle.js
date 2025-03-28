// Step 2: Implement the Car class that follows the Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Step 3: Create an instance of the Car class and call the start method
var myCar = new Car("Toyota", "Camry", 2020);
myCar.start(); // Expected Output: "Car engine started"
