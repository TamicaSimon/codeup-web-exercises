"use strict"

let inputNumber = "";

while (true) {
    inputNumber = prompt("Please enter an odd number between 1 and 50:");
    if (inputNumber % 2 === 1 && inputNumber >= 1 && inputNumber <= 50) {
        break;
    }
}
console.log("Skip number:" + inputNumber);

for (let i = 1; i <= 50; i++) {
    if (i === parseInt(inputNumber)) {
        continue;
    }
    if (i % 2 === 1) {
        console.log("Here is an odd number " + i);
    }
}

