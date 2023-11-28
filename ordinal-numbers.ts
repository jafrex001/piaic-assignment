let ordinal_numbers: number[] = [1, 2 , 3, 4, 5, 6, 7, 8, 9];

ordinal_numbers.forEach(ordinalnumber => {
    if(ordinalnumber === 1){
        console.log(ordinalnumber + "st");
    } else if(ordinalnumber == 2){
        console.log(ordinalnumber + "nd" );
    } else if(ordinalnumber == 3){
        console.log(ordinalnumber + "rd" );
    } else {
        console.log(ordinalnumber + "th");
    }
});