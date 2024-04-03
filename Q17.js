// Print a message saying that you can invite only two people
// console.log("We can invite only two people to dinner");
// Remove guest from your list one at a time until only two names remain in your List.
// using pop method
var guestlist = ["Fatim", "Sana", "Ayesha", "Amna", "Halima", "Armish"];
// guestlist.pop();
// console.log(guestlist);
// guestlist.pop()
// console.log(guestlist);
while (guestlist.length > 2) {
    guestlist.pop();
    console.log(guestlist);
}
// console.log("sorry we can't invite you to dinner");
// Print a message to persons removed from list and let them kow that you can't invite them to dinner;
// while(guestlist.length>2){
var removeguest = guestlist.pop();
console.log("\nsorry ".concat(removeguest, " we can't invite you to dinner"));
// Print a message to each of two people still on your List, letting them know they are sill invited.
guestlist.map(function (item) { return console.log("".concat(item, " you are still invited to dinner")); });
