"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = ["Admin", "Eric", "Ahmed", "Ahsan", "Hashir"];
for (let user of employee) {
    if (user === "Admin") {
        console.log("Hello admin, would you like to see a status report");
    }
    else {
        console.log(`hello ${user}, thank you for logging in again`);
    }
}
