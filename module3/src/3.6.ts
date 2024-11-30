{
    // getter and setter

/***  benefit of getter and setter is: you can access the value like property without calling a function
1. you can assign a value
2. you can get a value
***/








    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;
  
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
      set deposit(amount: number) {
        this._balance = this.balance + amount;
      }
      // public addDeposit(amount: number) {
      //   this._balance = this._balance + amount;
      // }
  
      //getter
      get balance() {
        return this._balance;
      }
      // public getBalance() {
      //   return this._balance;
      // }
    }
  
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);
  
    // goribManusherAccount.deposit = 0;
    // goribManusherAccount.addDeposit(20); // function call korte hosse
    goribManusherAccount.deposit = 50;
    // const myBalance = goribManusherAccount.getBalance(); // function call korte hosse
  
    const myBalance = goribManusherAccount.balance; // property er moto kore
    console.log(myBalance);
  
    //
  }