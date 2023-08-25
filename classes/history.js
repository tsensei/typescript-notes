// * Solution_1) Object Literal - Most straightforward way to define a object with some methods

const personTalha1 = {
	firstName: 'Talha',
	lastName: 'Siam',
	getFullName: function () {
		console.log(`${this.firstName} ${this.lastName}`);
	},
};

// personTalha1.getFullName();  // Outputs : `Talha Siam`

// ! But it doesn't scale very well, when we create another instance like this -

const personJohn1 = {
	firstName: 'John',
	lastName: 'Doe',
	getFullName: function () {
		console.log(`${this.firstName} ${this.lastName}`);
	},
};

// ! The methods are common yet copied to every instance resulting in inefficient memory usage
// ! The solution is every object referring to a single instance of these functions

// * Solution_2) Factory Functions - Function returning objects which reference to a functionStore

const functionStore = {
	getFullName: function () {
		console.log(`${this.firstName} ${this.lastName}`);
	},
};

function personFactory(firstName, lastName) {
	const tempObject = Object.create(functionStore);
	// ? Creates a object with its __proto__ referenced to functionStore
	// ? refer to protoExplained.js to learn more

	tempObject.firstName = firstName;
	tempObject.lastName = lastName;

	return tempObject;
}

const personTalha2 = personFactory('Talha', 'Siam');

// personTalha2.getFullName();  // Outputs : `Talha Siam`

const personJohn2 = personFactory('John', 'Doe');

// personJohn2.getFullName();  // Outputs : `John Doe`

// ! Now we have a single instance of the objects but we can go a step furthur
// ! and let the `new` keyword automate the object creation and returning

// * Solution_3) Factory Functions with `new` - Function returning objects with predefined __proto__ reference


/* 
 ? `new` keyword basically does three job
 ? 1) Create a empty object and assign to `this`
 ? 2) Set the __proto__ to function.prototype (personFactoryWithNew.prototype) in this case
 ? 3) Returns `this`
*/

function personFactoryWithNew(firstName, lastName) {
	// Throw error if invoked without `new`
	if (!new.target) {
		throw new Error('Object factory invoked without `new` keyword');
	}

	// ? `new` creates a empty object automatically and assigns the object to `this`
	// ? Under the hood : this = {}

	this.firstName = firstName;
	this.lastName = lastName;

	// ? `new` returns this automatically so we don't have to do it manually
}

// ? We new attach the function to personFactoryWithNew.prototype

personFactoryWithNew.prototype.getFullName = function () {
	console.log(`${this.firstName} ${this.lastName}`);
};

const personTalha3 = new personFactoryWithNew('Talha', 'Siam');

// personTalha3.getFullName();  // Outputs : 'Talha Siam'

// ? When we call a method on any instance created with personFactoryWithNew, if the method
// ? is not found in the object body, JS will search the object its __proto__ refers to,
// ? in this case the personFactoryWithNew.prototype set by the `new` keyword, it recursively
// ? searches the __proto__ chain until the method is found else throws and error

// ? refer to protoExplained.js to learn more

// * Solution_4) Class syntax - Syntactic sugar over solution 3

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		console.log(`${this.firstName} ${this.lastName}`);
	}
}

// ? This solution basically implements the solution 3 under the hood
// ? The factory function is called with the code inside constructor
// ? The methods are attached to the factory functions prototype
// ? where the factory function has the same name as the class name

const personTalha4 = new Person('Talha', 'Siam');

// console.log(personTalha4.getFullName === Person.prototype.getFullName); // Outputs : true

// personTalha4.getFullName(); // Outputs : 'Talha Siam'
