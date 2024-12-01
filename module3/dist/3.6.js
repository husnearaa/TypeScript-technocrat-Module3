"use strict";
{
    // getter and setter
    /***  benefit of getter and setter is: you can access the value like property without calling a function
    1. you can assign a value
    2. you can get a value
    ***/
    var BankAccount = /** @class */ (function () {
        function BankAccount(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        Object.defineProperty(BankAccount.prototype, "deposit", {
            set: function (amount) {
                this._balance = this.balance + amount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BankAccount.prototype, "balance", {
            // public addDeposit(amount: number) {
            //   this._balance = this._balance + amount;
            // }
            //getter
            get: function () {
                return this._balance;
            },
            enumerable: false,
            configurable: true
        });
        return BankAccount;
    }());
    var goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);
    // goribManusherAccount.deposit = 0;
    // goribManusherAccount.addDeposit(20); // function call korte hosse
    goribManusherAccount.deposit = 50;
    // const myBalance = goribManusherAccount.getBalance(); // function call korte hosse
    var myBalance = goribManusherAccount.balance; // property er moto kore
    console.log(myBalance);
    //
}
