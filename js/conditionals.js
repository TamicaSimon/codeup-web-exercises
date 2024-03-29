"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//var analyzeColor = prompt("What is your favorite color?")
//if(analyzeColor === "blue"){
//    alert("Blue is the color of the beautiful sky");
//} else if (analyzeColor === "red"){
//    alert("Strawberries are red");
//} else {
//    alert("I don't know anything about " + analyzeColor);
//}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(colors);
//if (randomColor === 'red' || 'orange' || 'yellow' || 'green' || 'blue' || 'indigo' || 'violet'){
//    alert("This is a color in the rainbow")
//}
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// var colorPreference = prompt("What is your favorite color?");
//
// switch(colorPreference) {
//     case "blue":
//         alert("Blue is the color of the sky!");
//         break;
//     case "red":
//         alert("Strawberries are red...");
//         break;
//     default:
//         alert(colorPreference + " is not a color I know!");
//         break;
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var colorName = prompt("What is your favorite color?");
// var colorName = colorName.toLowerCase()
//
// function analyzeColor(colorName) {
//     if (colorName === "red") {
//         alert("Red is the color of strawberries!")
//     } else if (colorName === "orange") {
//         alert("Cool! Orange is the color of an orange!")
//     } else if (colorName === "yellow") {
//         alert("Sweet! Yellow is the color of a lemon!")
//     } else if (colorName === "green") {
//         alert("Wicked! Green is the color of a lime!")
//     } else if (colorName === "blue") {
//         alert("Excellent! Blue is the color of a blueberry!")
//     } else if (colorName === "purple") {
//         alert("Phenomenal! Purple is the color of a plum!")
//     } else {
//         alert("Huh... I haven't heard of " + colorName + " before.")
//     }
// };
// analyzeColor(colorName);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, totalAmount) {
    var discount = 0;

    if (luckyNumber === 1) {
        discount = 0.1;
    } else if (luckyNumber === 2) {
        discount = 0.25;
    } else if (luckyNumber === 3) {
        discount = 0.35;
    } else if (luckyNumber === 4) {
        discount = 0.5;
    } else if (luckyNumber === 5) {
        discount = 1;
    }

    var discountedPrice = totalAmount - (totalAmount * discount);
    return discountedPrice;
}

 // * TODO:
 // * Uncomment the line below to generate a random number between 0 and 5.
 // * (In this line of code, 0 is inclusive, and 6 is exclusive)
 // * Prompt the user for their total bill, then use your `calculateTotal` function
 // * and alerts to display to the user what their lucky number was, what their
 // * price before the discount was, and what their price after the discount is.
 // */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalBill = prompt("What is your total bill?");
//
// var discountPercentage = 0;
// var message = "";
//
// switch(luckyNumber) {
//     case 0:
//         discountPercentage = 0;
//         message = "Sorry, no discount for you.";
//         break;
//     case 1:
//         discountPercentage = 0.1;
//         message = "Your lucky number is 1! You get a 10% discount.";
//         break;
//     case 2:
//         discountPercentage = 0.25;
//         message = "Your lucky number is 2! You get a 25% discount.";
//         break;
//     case 3:
//         discountPercentage = 0.35;
//         message = "Your lucky number is 3! You get a 35% discount.";
//         break;
//     case 4:
//         discountPercentage = 0.5;
//         message = "Your lucky number is 4! You get a 50% discount.";
//         break;
//     case 5:
//         discountPercentage = 1;
//         message = "Your lucky number is 5! You get everything for free!";
//         break;
//     default:
//         message = "You aren't very lucky. You don't get a discount.";
// }
//
// var totalDiscount = totalBill * discountPercentage;
// var discountedPrice = totalBill - totalDiscount;
//
// alert(message + " Your price before the discount was $" + totalBill + ". Your price after the discount is $" + discountedPrice.toFixed(2) + ".");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let confirmNumber = confirm("Would you like to enter a number?");

if (confirmNumber) {
    let userInput = prompt("Please enter a number:");

    if (isNaN(userInput)) {
        alert("That is not a number. Please enter a number.");
    } else {
        let number = parseInt(userInput);

        if (number % 2 === 0) {
            alert("The number is even.");
        } else {
            alert("The number is odd.");
        }

        alert("The number plus 100 is: " + (number + 100));

        if (number < 0) {
            alert("The number is negative.");
        } else if (number > 0) {
            alert("The number is positive.");
        } else {
            alert("The number is zero.");
        }
    }
} else {
    alert("You did not enter a number.");
}
