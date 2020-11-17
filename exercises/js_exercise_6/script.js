(function () {

//     Create a class called "BankAccount"
    class BankAccount {
        // Properties:
            // ● balance
            // ● interestRate
        constructor(balance, interestRate){
            this.balance = balance;
            this.interestRate = interestRate;
            this.addInterest()
        }
    // Methods:
        addInterest(){ // increases the balance by adding the appropriate interest
            this.balance = (this.balance * (1 + this.interestRate));
            console.log(this.balance);
        }
    }

// Next, create a subclass called "BankAccountWithFee"
// It inherits all the properties and methods from BankAccount and adds the following.
// Properties:
// ● fee // a fixed dollar amount fee
    class BankAccountWithFee extends BankAccount{
        constructor(balance, interestRate, fee) {
            super(balance, interestRate);
            this.fee = fee;
            }
        // Methods:
        // ● applyFee() // subtracts the fee from the balance
            applyfee(){
                console.log(this.balance - this.fee);
            }
    }

// Create a few instances (a.k.a. objects) of each class, and test them out by calling the methods.
const attempt1 = new BankAccount(2000, 0.5);
console.log(attempt1);
attempt1.addInterest();
const attempt2 = new BankAccountWithFee(5000, .5, 200);
console.log(attempt2);
attempt2.applyfee();


})();