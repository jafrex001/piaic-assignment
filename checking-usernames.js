var current_users = ["Ali", "Anas", "Usman", "Hamood", "Azeem"];
var new_users = ["Ahmed", "Ebad", "Haris", "Hamid", "Azeem"];
new_users.forEach(function (newuser) {
    current_users.forEach(function (currentuser) {
        if (currentuser.toLowerCase() === newuser.toLowerCase()) {
            console.log("Username is taken");
        }
        else {
            "Username is available";
        }
    });
});
