function make_shirt_new(size: string = "Large", text: string = "I love TypeScript") {
    console.log(`The shirt is ${size}, and has the text "${text}"`);
}

make_shirt_new();
make_shirt_new("Medium");
make_shirt_new("Small", "This is a message on a T-shirt.");
