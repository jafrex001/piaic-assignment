
function make_shirt_new(size: string = "Large", text: string = "I love TypeScript") {
    console.log(`The shirt is ${size}, and has the text "${text}"`);
}

make_shirt_new();

// Create a medium shirt with the default message
make_shirt_new("Medium");

// Create a shirt of any size with a different message
make_shirt_new("Small", "This is a message on a T-shirt.");
