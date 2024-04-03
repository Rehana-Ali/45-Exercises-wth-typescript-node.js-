var guestArray1 = ["Aliya", "Smaniya", "Summan", "Isra"];
// guestArray1.map((item)=> console.log(`Hello,${item} you are invited to dinner`));
// let absent:string = guestArray1[1]
// console.log(`${absent} can not make it, for dinner`);
// console.log(samaniya + " " + "cannot make it, for dinner");
// replace the guest
var oldguest = "Isra";
var newguest = "kainat";
guestArray1[guestArray1.indexOf(oldguest)] = newguest;
console.log(guestArray1);
// send message everyone inviting to dinner
// guestArray1.map((item)=> console.log(`Hello, ${item} you are invited to dinner`));
