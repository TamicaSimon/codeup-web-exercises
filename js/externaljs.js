"use strict";
console.log('Hello from JavaScript');

alert("Welcome to my website");
//Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//
// For example, if the user enters "blue", your code should alert a message that says:
//
// "Great, blue is my favorite color too!"
var userInput = prompt ('What is your favorite color?');
console.log(userInput + 'is my favorite color too');

//Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.
// Finally, commit the changes to your git repository, and push to GitHub.

//Rent Little Mermaid 3 days
//Rent Brother bear 5 days
//Rent Hercules 1 day
// $3 per day per rental
const rentalperday = 3.00
alert("The price per day per movie is $3");
var LittleMermaidRental = prompt('How many days would you like to rent the Little Mermaid?');
var LittleMermaidTotal = rentalperday * LittleMermaidRental

var BrotherBearRental = prompt('How many days would you like to rent Brother Bear?');
var BrotherBearTotal = rentalperday * BrotherBearRental

var HerculesRental = prompt('How many days would you like to rent Hercules?');
var HerculesTotal = rentalperday * HerculesRental

var RentalTotal = LittleMermaidTotal + BrotherBearTotal + HerculesTotal
alert("The total cost today is" RentalTotal "for all movies. Thank you for shopping with us.");

//You are a contractor for 3 companies: Google, Amazon and Facebook.
// Google pays $400, Amazon $380 and Facebook $350
//How much is your pay? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

const Amazonrate = 380.00
const Googlerate = 400.00
const Facebookrate = 350.00

var Amazonhours = prompt("How many hours were worked with Amazon this week?");
var Amazonpay = Amazonrate * Amazonhours
var Googlehours = prompt("How many hours were worked with Google this week?");
var Googlepay = Googlerate * Googlehours
var Facebookhours = prompt("How many hours did you work with Facebook this week?");
var Facebookpay = Facebookrate * Facebookhours
var Totalpay = Amazonpay + Googlepay + Facebookpay
alert("Your total deposit for the week is" Totalpay "and there are no taxes withheld as a contractor".);

//A student can be enrolled in a class only if the class is not full and the class schedule
//does not conflict with her current schedule.

let classcap = confirm("Is the class at capacity?");
let conflict = confirm("Is there a schedule conflict?");
let enrollmentresults = classcap && conflict;
alert("Congrats! The enrollmentb results for your class is: " + enrollmentresults);

let offerstatus = confirm("Has this offer expired?");
let offerexpired = "Unfortunately this offer has expired";
let premiumstatus = confirm("Are you currenlty a paid premium member?");
let numberofitems = confirm("Do you have more than 2 items in your cart?");
let premiummembers = premiumstatus && offerstatus;
let freemembershipstatus = (numberofitems == true) && offerexpired;
if(premiummembers === 1) {
    alert("Thank you for being a premium member and shopping with us today!");
}
else if(freemembershipstatus === 1) {
    alert("Thank you for shopping with us today and please consider upgrading to a paid/premium membership")
}
else {"Unfortunately the offer has expired. Please try back later."};
