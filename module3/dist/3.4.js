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
    //
    var Animal = /** @class */ (function () {
        function Animal(name, species) {
            this.name = name;
            this.species = species;
        }
        Animal.prototype.makeSound = function () {
            console.log("I am making sound");
        };
        return Animal;
    }());
    var Dog_1 = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, species) {
            return _super.call(this, name, species) || this;
        }
        Dog.prototype.makeBark = function () {
            console.log("I am barking");
        };
        return Dog;
    }(Animal));
    var Cat_1 = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name, species) {
            return _super.call(this, name, species) || this;
        }
        Cat.prototype.makeMeaw = function () {
            console.log("I am mewaing");
        };
        return Cat;
    }(Animal));
    // smart way tge handle korar jnne chaile amra function bebohar krte pari
    var isDog_1 = function (animal) {
        return animal instanceof Dog_1;
    };
    var isCat_1 = function (animal) {
        return animal instanceof Cat_1;
    };
    var getAnimal = function (animal) {
        if (isDog_1(animal)) {
            animal.makeBark();
        }
        else if (isCat_1(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    var dog = new Dog_1("Dog Bhai", "dog");
    var cat = new Cat_1("Cat Bhai", "cat");
    getAnimal(cat);
    //
}
