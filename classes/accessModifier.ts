/*
  ? Access modifiers helps to control the visibility of class members
  ? They help facilitate - encapsulation logic, restricting access and maintainable code

  ? Access Modifiers in TS :
  ?  1) Public : Properties & Methods accessible from everywhere, instances, subclasses and instances of subclasses
  ?  2) Private : Properties & Methods accessible within the class only, not instance, subclass or subclass instances
  ?  3) Protected : Properties & Methods accessible within the class and subclass body, not own or subclass instances
  ?  4) Readonly : Readonly properties can only be initialized at the time of declaration or within the constructor of the class. Once set, they cannot be modified.
*/

class BankAccount {
    public accountNumber: string; // Accessible from anywhere
    private balance: number; // Accessible only within the class
    protected ownerName: string; // Accessible within the class and subclasses
    readonly bankName: string = "TechBank"; // Read-only property, cannot be modified after initialization
  
    constructor(accountNumber: string, balance: number, ownerName: string) {
      this.accountNumber = accountNumber;
      this.balance = balance;
      this.ownerName = ownerName;
    }
  
    // Public method to deposit money
    public deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposited ${amount}, new balance is ${this.balance}`);
    }
  
    // Private method to apply interest
    private applyInterest(): void {
      this.balance = this.balance * 1.03;
      console.log(`Interest applied, new balance is ${this.balance}`);
    }
  
    // Protected method to log owner information, can be overridden in subclasses
    protected logOwnerInfo(): void {
      console.log(`Account owner: ${this.ownerName}`);
    }
  
    // Method to perform end-of-month operations
    public endOfMonth(): void {
      this.applyInterest();
      this.logOwnerInfo();
    }
  }
  
  class VIPAccount extends BankAccount {
    private vipStatus: boolean = true;
  
    // Overriding the protected method to include VIP status
    protected logOwnerInfo(): void {
      super.logOwnerInfo();
      console.log(`VIP Status: ${this.vipStatus}`);
    }
}
  
const talhaAccount = new BankAccount('12345', 1000, 'Talha Siam');
talhaAccount.deposit(500); // Allowed
// talhaAccount.balance = 2000; // Error, private property
// talhaAccount.applyInterest(); // Error, private method
// talhaAccount.bankName = 'NewBank'; // Error, readonly property
talhaAccount.endOfMonth();
  
const vipAccount = new VIPAccount('67890', 2000, 'John Doe');
vipAccount.endOfMonth(); // Calls overridden logOwnerInfo method
  