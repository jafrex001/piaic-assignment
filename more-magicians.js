var newMagicians = ["Tyler", "Ninja", "Blevins"];
function show_newMagicians() {
    var oldmagicians = new Array(newMagicians);
    console.log(oldmagicians);
    make_great();
    newMagicians.forEach(function (newMagician) {
        console.log(newMagician);
    });
}
function make_great() {
    for (var i = 0; i < newMagicians.length; i++) {
        newMagicians[i] = newMagicians[i] + " the Great.";
    }
    return new Array(newMagicians);
}
show_newMagicians();
