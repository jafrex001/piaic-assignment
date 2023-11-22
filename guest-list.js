"use strict";
let guestList = ["Stephen Hawkings", "Neil Degrass Tyson", "Seth Godin"];
guestList.forEach(element => {
    console.log(`I would like to invite ${element} to dinner.`);
});
let guestUnableToAttend = guestList[0];
console.log(`Unfortunately ${guestUnableToAttend} cannot make it to dinner`);
let newGuest = "Mr. Laurence";
guestList[0] = newGuest;
guestList.forEach(element => {
    console.log(`I would like to invite ${element} to dinner.`);
});
console.log("We just found a new, bigger dining table");
let newGuestAtStart = "Trevor";
guestList.unshift(newGuestAtStart);
let newGuestAtMiddle = "Wallace";
guestList.splice(3, 0, newGuestAtMiddle);
let newGuestAtEnd = "Micheal";
guestList.push(newGuestAtEnd);
guestList.forEach(element => {
    console.log(`I would like to invite ${element} to dinner.`);
});
console.log("The new table wont arrive in time unfortunately, and we can only invite two more people");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}. we can not invite you to dinner.`);
    }
}
guestList.forEach(element => {
    console.log(`You are still invited, ${element}!`);
});
guestList.pop();
guestList.pop();
console.log("Empty guest list:", guestList);
