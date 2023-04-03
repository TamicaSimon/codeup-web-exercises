"use strict"
// TODO: CREATE A WHILE LOOP THAT MULTIPLIES EVERY NUMBER BY 2
let i = 1;
let result = 2;

while (i <= 16) {
    console.log(result);
    result = result * 2;
    i++;
}
// TODO: Write code for an ice cream seller that generates a random number between 50 and 100 representing the amount of cones to sell and then generate a random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold.

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have to sell " + allCones + " cones.");

do {
    var conesToSell = Math.floor(Math.random() * 5) + 1;

    if (conesToSell <= allCones) {
        console.log(conesToSell + " cone(s) sold...");
        allCones -= conesToSell;
    } else {
        console.log("Cannot sell you " + conesToSell + " cones, I only have " + allCones + " left...");
    }

} while (allCones > 0);

console.log("The ice cream is all gone!");
