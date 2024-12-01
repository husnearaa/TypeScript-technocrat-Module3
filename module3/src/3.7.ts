{
  // static


/**
 * in short about static:
 * 
 1. without making instance we can directly use a class by using static property. 
 -- static property like a premium feature no need to use or make instance while we will use static.
 and if we use static property then we have to use the class name then it will work. 

 ***/



  class Counter {
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // const instance1 = new Counter();
  console.log(Counter.increment()); // 1 -> different memory
  // 1 -> different memory

  // const instance2 = new Counter();
  console.log(Counter.increment()); // 1  --> different memory
  // 1  --> different memory

  // const instance3 = new Counter();
  console.log(Counter.increment());
  //
}