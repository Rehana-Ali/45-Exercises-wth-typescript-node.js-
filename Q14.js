var guestArray = ["saima", "hassan", "Marya", "areesha"];
// guestArray.map((a)=> console.log("Hello" ,a,"you are invited to dinner"));
guestArray.map(function (item) { return console.log("Dear ".concat(item, ",\n you are invited to dinner")); });
