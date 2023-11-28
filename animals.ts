let animals: string[] = ["Lion", "Dog", "Tiger"];

animals.forEach(animal => {
    if (animal == "Dog") {
        console.log(`A ${animal} would make a great pet`);
    } else {
        console.log(`A ${animal} is a dangerous animal`);

    }
});

console.log("All of these animals are mammals");
