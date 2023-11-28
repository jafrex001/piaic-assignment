let userNames2: string[] = [];

if (userNames2.length === 0) {
    console.log("We need to find some users!");
} else {
    userNames2.forEach(username => {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
}
