"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // access modifiers
    // private property only accessible inside class
    // (_balance) here the underscore is the sign of private property
    var BankAccount = /** @class */ (function () {
        function BankAccount(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        BankAccount.prototype.addDeposit = function (amount) {
            this._balance = this._balance + amount;
        };
        BankAccount.prototype.getBalance = function () {
            return this._balance;
        };
        return BankAccount;
    }());
    var StudentAccount = /** @class */ (function (_super) {
        __extends(StudentAccount, _super);
        function StudentAccount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StudentAccount.prototype.test = function () {
            this._balance;
        };
        return StudentAccount;
    }(BankAccount));
    var goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    // goribManusherAccount.balance = 0;
    goribManusherAccount.addDeposit(20);
    var myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
    //
}
