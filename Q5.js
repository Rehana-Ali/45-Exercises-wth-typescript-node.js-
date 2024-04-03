// Famous Qoute 2: Repeat Exercise 4, but this time store the famous person's name in a variable called famous-person.Then compose your message and store it in a new variable called message.print your message.
'Thomas Edison once said "Our greatest weakness lies in giving up.The most certain way to succeed is always to try just one more time".';
var famousperson = "Thomas Edison";
var famousquote = 'once once said, "Our greatest weakness lies in giving up.The most certain way to succeed is always to try just one more time".';
var message = "".concat(famousperson, " once said, ").concat(famousquote);
console.log(message);
