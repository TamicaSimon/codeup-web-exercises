(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    var person = {
        firstName: "Tamica",
        lastName: "Simon"
    };
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person);

    var mychildren = ["Latifah", "Nard", "Christina"];
    person.children = mychildren;
    console.log(person);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName);
    };

    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    var hebDiscount = 0.12;
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function finalPrice(amount) {
        if (amount > 200) {
            return amount - (hebDiscount * amount);
        } else {
            return amount;
        }
    }

    shoppers.forEach( function(shoppers) {
        if (shoppers.amount > 200) {
            alert("Greetings " + shoppers.name + ". You've spent $" + shoppers.amount + " and earned a 12% discount!");
            let savings = shoppers.amount * 0.12;
            let finalTotal = shoppers.amount.toFixed(2) - savings;
            console.log(shoppers.name + " originally spent $" + shoppers.amount.toFixed(2) + ".");
            console.log(shoppers.name + "saved and has a new final total of $" + finalTotal.toFixed(2) + ".");
            alert("Congrats! Your new total is $" + finalTotal.toFixed(2) + ".");
        } else {
            alert("Unfortunately, " + shoppers.name + " you spent $" + shoppers.amount.toFixed(2) + " and do not qualify for a discount so your total is $" + shoppers.amount.toFixed(2));
            console.log(shoppers.name + " does not qualify for the discount.");
            console.log(shoppers.name + "'s total is $" + shoppers.amount.toFixed(2) + ".");
        }
    })
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: 'Becoming',
            author: {
                firstName: "Michelle",
                lastName: "Obama"
            }
        },
        {
            title: 'Finding Me',
            author: {
                firstName: "Viola",
                lastName: "Davis"
            }
        },
        {
            title: 'Will',
            author: {
                firstName: "Will",
                lastName: "Smith"
            }
        },
        {
            title: 'Unity in the Community',
            author: {
                firstName: "Queen",
                lastName: "Latifah"
            }
        },
        {
            title: 'Straight Shooter',
            author: {
                firstName: "Stephen A.",
                lastName: "Smith"
            }
        }
        ]
        console.log(books);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// books.forEach(function(book:{author:{firstName:string, lastName:string}, index, array));
//
// console.log("Book #" + index);
// console.log("Title" + books.title);
// console.log(("Author:" + books.author.firstName + " "books.author.lastName));
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();