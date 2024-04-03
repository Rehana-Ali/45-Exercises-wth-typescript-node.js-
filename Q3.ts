// Name cases: Store a person's name in a variable, and then print that person's name in lowercase, uppercase, titlecase.

let personName:string = "Rehana";



// Lower case

console.log("lowercase:" + personName.toLowerCase());

// upper case

console.log("uppercase:" + personName.toUpperCase());

// title case

console.log("Titlecase:" + personName.charAt(0).toUpperCase()+ personName.slice(1,6));