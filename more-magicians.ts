let newMagicians: string[] = ["Tyler", "Ninja", "Blevins"];

function show_newMagicians() {
    make_great();
    newMagicians.forEach(newMagician => {
        console.log(newMagician);
    });
}



function make_great() {
    for (let i = 0; i < newMagicians.length; i++) {
        newMagicians[i] = newMagicians[i] + " the Great.";
    }
}

show_newMagicians();