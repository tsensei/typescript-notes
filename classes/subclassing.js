/*
  ? Subclassing refers to the practice of creating a new class (subclass) that is a specialized version of an existing class (superclass). 
  ? The subclass inherits properties and methods from the superclass, allowing for reusing existing code and adding or overriding functionality.
  ? In the context of JavaScript and TypeScript, subclassing can be achieved using different paradigms, as demonstrated below.
*/

// * Solution_1) Factory function - Factory functions with explicit prototype chaining

const userFunctionStore = {
    increaseScore : function(){
        this.score++
    }
}

function userFactory(name, score){
    const tempObject= Object.create(userFunctionStore);

    tempObject.name = name;
    tempObject.score = score;

    return tempObject;
}

const paidUserFunctionStore = {
    recharge : function(amount){
        this.balance += amount;
    }
}

function paidUserFactory(name, score, balance){
    const tempObject = userFactory(name, score);

    tempObject.balance = balance;
    // ? But now out tempObject has its __proto__ set to `userFunctionStore`
    // ? so we don't have access to functions specific to paidUser

    Object.setPrototypeOf(tempObject, paidUserFunctionStore);
    // ? We have set the __proto__ of our tempObject to `paidUserFunctionStore`
    // ? But now we have lost the link to common function for all users
    
    return tempObject;
}

// ? We can just set the __proto__ of `paidUserFunctionStore` to point to `userFunctionStore`
// ? This way when we can't find a method in `paidUserFunctionStore`, `userFunctionStore` will be looked for the function

Object.setPrototypeOf(paidUserFunctionStore, userFunctionStore);

const talhaPaidUser1 = paidUserFactory('Talha', 5, 99);

talhaPaidUser1.increaseScore();

// console.log(talhaPaidUser1); // Outputs : { name: 'Talha', score: 6, balance: 99 }

talhaPaidUser1.recharge(1);

// console.log(talhaPaidUser1); // Outputs : { name: 'Talha', score: 6, balance: 100 }



// * Solution_2) Factory function with `new` - Constructors with the new keyword and prototype chaining

function userFactoryWithNew(name, score){
    this.name = name;
    this.score = score;
}


userFactoryWithNew.prototype.increaseScore = function(){
    this.score++;
}

function paidUserFactoryWithNew(name, score, balance){
    if (!new.target) {
		throw new Error('Object factory invoked without `new` keyword');
	}

    userFactoryWithNew.call(this, name, score);
    // ? Call the userFactoryWithNew, but we don't call using `new`, rather send out own `this` object
    // ? which was created during invoking this function with `new`

    this.balance = balance;

    // ? Our auto returned function will have its __proto__ pointed to `paidUserFactoryWithNew.prototype`
    // ? because we invoked this function with `new`
}

paidUserFactoryWithNew.prototype.recharge = function(amount){
    this.balance += amount;
}

// ? But we currently have no link to the common functions to both users and paidUsers
// ? To facilitate that, we can just set the __proto__ of `paidUserFactoryWithNew.prototype` to point
// ? to the common function store `userFactoryWithNew.prototype` 

Object.setPrototypeOf(paidUserFactoryWithNew.prototype, userFactoryWithNew.prototype);

const talhaPaidUser2 = new paidUserFactoryWithNew("Talha", 5, 99);

talhaPaidUser2.increaseScore();

// console.log(talhaPaidUser2); // Outputs : { name: 'Talha', score: 6, balance: 99 }

talhaPaidUser2.recharge(1);

// console.log(talhaPaidUser2); // Outputs : { name: 'Talha', score: 6, balance: 100 }


// * Solution_3) Class syntax - ES6 class with extends

class User{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    increaseScore(){
        this.score++;
    }
}

class PaidUser extends User{
    constructor(name, score, balance){
        // ? Calls the User constructor
        super(name, score);
        this.balance = balance;
    }

    recharge(amount){
        this.balance += amount;
    }
}

const talhaPaidUser3 = new PaidUser("Talha", 5, 99);

talhaPaidUser3.increaseScore();

// console.log(talhaPaidUser3); // Outputs : { name: 'Talha', score: 6, balance: 99 }

talhaPaidUser3.recharge(1);

// console.log(talhaPaidUser3); // Outputs : { name: 'Talha', score: 6, balance: 100 }