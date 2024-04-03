function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nsandwich order with:");
    items.forEach(function (element) { return console.log("-" + element); });
    console.log("enjoy your sandwich \n");
}
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheez');
sandwich('garlic chicken', 'mayo sauce');
