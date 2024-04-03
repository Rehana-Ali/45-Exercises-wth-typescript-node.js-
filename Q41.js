/*function show_magicians(magicians : string []): void {

    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string [] = ["ali","humza","bilal"];
show_magicians(magician)





function funcName1(): string {
    let myName = "Ahmed"
 
return myName
}

console.log(funcName1())*/
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
