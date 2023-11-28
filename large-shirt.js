function make_shirt_new(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("The shirt is ".concat(size, ", and has the text \"").concat(text, "\""));
}
make_shirt_new();

make_shirt_new("Medium");

make_shirt_new("Small", "This is a message on a T-shirt.");
