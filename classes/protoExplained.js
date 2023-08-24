/*
  ? To fully understand the prototypical nature of Javascript, we have a to firstly understand
  ? every function is a object is JS, more easily - every function has a object attached to it
  ? When we call the function identifier with braces (), we refer to the function part
  ? When we call the identifier with dot operator, we refer to the object part
*/

function multiplyBy2(num){
    return num * 2;
}

multiplyBy2.stored = 5;

console.log(multiplyBy2(3)); // Outputs : 6

multiplyBy2.stored = 6;

console.log(multiplyBy2(multiplyBy2.stored)); // Outputs : 12

multiplyBy2.logger = function () {
  console.log("Hello world");
};

multiplyBy2.logger(); // Outputs : Hello world

/* 
  ? We can refer to this thing as a function object combo
  ? Every function has its object with a prototype property set to a empty object {}
  ? When called this function with `new` keyword, the __proto__ property of the object
  ? refers to the constructor functions `function.prototype` object
*/

function carConstructor(model, topSpeed){
    this.model = model;
    this.topSpeed = topSpeed;
}

carConstructor.prototype.drive = function(){
    console.log('vroom');
}

const car = new carConstructor('Sonata', 200);

car.drive(); // Outputs : vroom

console.log(car.__proto__ === carConstructor.prototype); // Outputs : true

console.log(car.drive === carConstructor.prototype.drive); // Outputs : true
// ? This verifies this is indeed the same function



// ? Interesting : How do we call the toString method if its not defined in the car.drive function-object ?
console.log(car.drive.toString());
