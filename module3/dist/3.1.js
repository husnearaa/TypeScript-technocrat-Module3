"use strict";
{
    // oop - class
    var Animal = /** @class */ (function () {
        function Animal(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        Animal.prototype.makeSound = function () {
            console.log("The ".concat(this.name, " says ").concat(this.sound));
        };
        return Animal;
    }());
    var dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
    var cat = new Animal("jojo bhai", "cat", "meaw meaw");
    cat.makeSound();
    //
}
