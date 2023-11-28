function make_album(artist: string, title: string): { artist: string, title: string,} {
    let album: { artist: string, title: string} = {
        artist: artist,
        title: title,
    };
    return album;
};


const album1 = make_album("Kanye West", "The College Dropout");
const album2 = make_album("Kanye West", "Late Registration"); 
const album3 = make_album("Kanye West", "Graduation");


console.log(album1);
console.log(album2);
console.log(album3);
