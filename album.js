function make_album(artist, title) {
    var album = {
        artist: artist,
        title: title,
    };
    return album;
}
;
var album1 = make_album("Kanye West", "The College Dropout");
var album2 = make_album("Kanye West", "Late Registration");
var album3 = make_album("Kanye West", "Graduation");
console.log(album1);
console.log(album2);
console.log(album3);
