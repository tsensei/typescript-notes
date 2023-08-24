/*
// 1) Object literal - Most simple way of defining a object

 const person1 = {
    firstName : "Talha",
    lastName : "Siam",
    getName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person1.getName()); 

// But this doesn't scale well, in case of multiple person, each will have a copy of the getName function
// which wastes memory space without any reason
*/

/* 
// 2) Factory Functions - Returns object

const personFunctionStore = {
    getName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}


function createPerson(firstName, lastName){
    // Set the prototype of the object to function store
    // it effectively sets the __proto__ of instanceObject to personFunctionStore
    // when a method is not found in a object, its prototype is searched recursively
    // through the __proto__ link
    let instanceObject = new Object(personFunctionStore);

    instanceObject.firstName = firstName;
    instanceObject.lastName = lastName;

    return instanceObject;
}

const person1 = createPerson('Talha', 'Siam');
const person2 = createPerson('John', 'Doe');


console.log(person1.getName());
console.log(person2.getName());

// Now we only have a single instance of the shared functions
*/

/*
// 3) Factory function with new and Function.prototype

// In the previous implementation, assigning the object a name and returning from factory function
// can be avoided by using the `new keyword`

// `new` keyword basically does 3 things
//  1. assign `this` to a empty object
//  2. link the __proto__ of the empty object to the Function.prototype of the factory function
//  3. return `this` object

// Note : In case of confusion why a Function has a prototype property, all Functions in JS are Objects
// More easily, each function is a function object combo which has its object part with a property named 'prototype'

// So, shared functions should now be attached to Function.prototype

 function createPerson(firstName, lastName){
    // Throw error if called without `new`
    if(!new.target){
        throw new Error('This factory function should only be called with the `new` keyword.')
    }
    // `new` automatically creates a empty object and assigns to `this`
    this.firstName = firstName;
    this.lastName = lastName;
    // `new` automatically returns `this`
}

// Attaching functions
createPerson.prototype.getName = function(){
    return `${this.firstName} ${this.lastName}`
}

const person1 = new createPerson('Talha', 'Siam');
const person2 = new createPerson('John', 'Doe');


console.log(person1.getName());
console.log(person2.getName()); 
*/


/* 
// 4) Class - syntactic sugar built upon the approach 3

// Class names should be PascalCase
class Person{
    // Calling the factory bit under the hood
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Calling the function attaching bit under the hood
    getName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person('Talha', 'Siam');
const person2 = new Person('John', 'Doe');


console.log(person1.getName());
console.log(person2.getName()); 
*/