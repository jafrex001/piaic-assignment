var animals = ["Lion", "Dog", "Tiger"];
animals.forEach(function (animal) {
    if (animal == "Dog") {
        console.log("A ".concat(animal, " would make a great pet"));
    }
    else {
        console.log("A ".concat(animal, " is a dangerous animal"));
    }
});
console.log("All of these animals are mammals");
