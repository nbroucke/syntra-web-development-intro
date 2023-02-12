"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const myCar = new Car("Honda", "Accord", 2017);
console.log(myCar.make);
