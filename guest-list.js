var guestList = ["Stephen Hawkings", "Neil Degrass Tyson", "Seth Godin"];
guestList.forEach(function (element) {
    console.log("I would like to invite ".concat(element, " to dinner."));
});
var guestUnableToAttend = guestList[0];
console.log("Unfortunately ".concat(guestUnableToAttend, " cannot make it to dinner"));
var newGuest = "Mr. Laurence";
guestList[0] = newGuest;
guestList.forEach(function (element) {
    console.log("I would like to invite ".concat(element, " to dinner."));
});
console.log("We just found a new, bigger dining table");
var newGuestAtStart = "Trevor";
guestList.unshift(newGuestAtStart);
var newGuestAtMiddle = "Wallace";
guestList.splice(3, 0, newGuestAtMiddle);
var newGuestAtEnd = "Micheal";
guestList.push(newGuestAtEnd);
guestList.forEach(function (element) {
    console.log("I would like to invite ".concat(element, " to dinner."));
});
console.log("The new table wont arrive in time unfortunately, and we can only invite two more people");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ". we can not invite you to dinner."));
    }
}
guestList.forEach(function (element) {
    console.log("You are still invited, ".concat(element, "!"));
});
guestList.pop();
guestList.pop();
// Print the list to ensure it's empty
console.log("Empty guest list:", guestList);
