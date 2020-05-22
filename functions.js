"use strict";


// 1. isHometown

// Define your function here

function isHometown(town) {

    return town === 'San Francisco';

}

console.log(isHometown('Oakland'))

// 2. getFullName

// Define your function as function declaration

function getFullName(firstName, lastName) {

    return `${firstName} ${lastName}`;
}

console.log(getFullName('Kelli','Budd'))

// 2. getFullName

// Define your function as arrow function expression

const getFullName2 = (firstName, lastName) => firstName + " " + lastName;

console.log(getFullName2('Kelli','Budd'))

// 3. calculateTotal

// Define your function here

const calculateTotal = (basePrice, state, tax=0.05) => {

    const subtotal = basePrice * (1 + tax);

    let fee = 0;

    if (state === 'CA') {
      fee = 0.03 * subtotal;
    } else if (state === 'PA') {
      fee = 2;
    } else if (state === 'MA') {
        if (basePrice <= 100) {
          fee = 1;
        } else {
          fee = 3;
        }
    }

    return subtotal + fee;
}

console.log(calculateTotal(100, 'MA'))

