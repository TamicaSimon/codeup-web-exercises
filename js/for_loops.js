"use strict"

const number = parseInt(prompt('Enter a number: '));

for(let i = 1; i <= 10; i++) {

    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
