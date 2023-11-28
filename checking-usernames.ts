let current_users: string[] = ["Ali", "Anas", "Usman", "Hamood", "Azeem"];

let new_users: string[] = ["Ahmed", "Ebad", "Haris", "Hamid", "Azeem"];



new_users.forEach(newuser => {
    current_users.forEach(currentuser => {
        if (currentuser.toLowerCase() === newuser.toLowerCase()) {
            console.log("Username is taken");
        } else {
            "Username is available"
        }
    });

});