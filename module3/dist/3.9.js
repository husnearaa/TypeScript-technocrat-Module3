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
    // real implementation
    var Car1 = /** @class */ (function () {
        function Car1() {
        }
        Car1.prototype.startEngine = function () {
            console.log("I am starting the car engine");
        };
        Car1.prototype.stopEngine = function () {
            console.log("I am stopping the car engine");
        };
        Car1.prototype.move = function () {
            console.log("I am moving the car");
        };
        Car1.prototype.test = function () {
            console.log("I am just testing");
        };
        return Car1;
    }());
    var toyotaCar = new Car1();
    toyotaCar.startEngine();
    // abstract class
    // idea
    var Car2 = /** @class */ (function () {
        function Car2() {
        }
        Car2.prototype.test = function () {
            console.log("I am just testing");
        };
        return Car2;
    }());
    var ToyotaCar = /** @class */ (function (_super) {
        __extends(ToyotaCar, _super);
        function ToyotaCar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ToyotaCar.prototype.startEngine = function () {
            console.log("I am starting the car  engine");
        };
        ToyotaCar.prototype.stopEngine = function () {
            console.log("I am stopping the car engine");
        };
        ToyotaCar.prototype.move = function () {
            console.log("I am moving  the car");
        };
        return ToyotaCar;
    }(Car2));
    // const hondaCar = new Car2();
    // hondaCar.startEngine();
    //
}
