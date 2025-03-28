// Step 1: Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Step 2: Implement the Car class that follows the Vehicle interface
  class auto implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Step 3: Create an instance of the Car class and call the start method
  const myauto = new Car("Toyota", "Camry", 2020);
  myauto.start(); // Expected Output: "Car engine started"
  