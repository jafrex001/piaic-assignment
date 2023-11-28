var userNames2 = [];
if (userNames2.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames2.forEach(function (username) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    });
}
