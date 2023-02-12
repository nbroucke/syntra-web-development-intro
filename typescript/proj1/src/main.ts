class Car {
  constructor(public make: string, public model: string, public year: number) {}
}

const myCar = new Car("Honda", "Accord", 2017);
console.log(myCar.make);
