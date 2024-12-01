"use strict";
{
    // static
    /**
     * in short about static:
     *
     1. without making instance we can directly use a class by using static property.
     -- static property like a premium feature no need to use or make instance while we will use static.
     and if we use static property then we have to use the class name then it will work.
    
     ***/
    var Counter_1 = /** @class */ (function () {
        function Counter() {
        }
        Counter.increment = function () {
            return (Counter.count = Counter.count + 1);
        };
        Counter.decrement = function () {
            return (Counter.count = Counter.count - 1);
        };
        Counter.count = 0;
        return Counter;
    }());
    // const instance1 = new Counter();
    console.log(Counter_1.increment()); // 1 -> different memory
    // 1 -> different memory
    // const instance2 = new Counter();
    console.log(Counter_1.increment()); // 1  --> different memory
    // 1  --> different memory
    // const instance3 = new Counter();
    console.log(Counter_1.increment());
    //
}
