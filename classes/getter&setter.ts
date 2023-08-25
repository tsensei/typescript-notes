class Employee {
    private _name: string; // Private property to hold the name
    private _salary!: number; // Using definite assignment assertion
  
    constructor(name: string, salary: number) {
      this._name = name;
  
      // Using the setter to assign the salary property.
      // This ensures that the validation logic inside the setter is applied to the initial value.
      this.salary = salary;
    }
  
    // Getter for the name property.
    // When accessed, it returns the private _name property.
    public get name(): string {
      return this._name;
    }
  
    // Setter for the name property.
    // When assigned, it updates the private _name property and includes validation.
    public set name(value: string) {
      if (value.trim() === '') {
        console.error('Name cannot be empty.');
        return;
      }
      this._name = value;
    }
  
    // Getter for the salary property.
    // When accessed, it returns the private _salary property.
    public get salary(): number {
      return this._salary;
    }
  
    // Setter for the salary property.
    // When assigned, it updates the private _salary property and includes validation.
    public set salary(value: number) {
      if (value < 1000) {
        console.error('Salary must be at least 1000.');
        return;
      }
      if (value > 100000) {
        console.error('Salary must not exceed 100000.');
        return;
      }
      this._salary = value; // Only set the value if it passes the validation checks
    }
}
  
const emp = new Employee('Talha', 2000);
  
// Using the getter method for the name property
console.log(emp.name); // Outputs 'Talha'
  
// Using the setter method for the name property
emp.name = 'Talha Siam';
  
// Using the getter method for the salary property
console.log(emp.salary); // Outputs 2000
  
// Attempt to set an invalid salary
// The setter method's validation logic is triggered, displaying an error
emp.salary = 500; // Outputs error 'Salary must be at least 1000.'
  