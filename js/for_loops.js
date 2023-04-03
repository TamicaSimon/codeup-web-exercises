"use strict"

// TODO: Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}

let num = parseInt(prompt("Enter a number:"));

showMultiplicationTable(num);
// TODO: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 181) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even');
    } else {
        console.log(randomNumber + ' is odd');
    }
}

//TODO: Create a for loop that uses console.log to create specific output in text.
for (let i = 1; i <= 9; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    console.log(str);
}
//TODO: Create a for loop that uses console.log to decrease by 5 from 100 to 0.

for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}
