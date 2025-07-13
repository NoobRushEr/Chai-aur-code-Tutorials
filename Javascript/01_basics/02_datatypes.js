"use strict";

// console.log('Hello World!');
// alert(2+2);

// number
let num = 10;

//bigint
let bignum = 1234567890123456789012345678901234567890n;

//string
let name = 'Dipesh';

//boolean
let isOk = true;

//null
let emptyValue = null;

//undefined
let notAssigned;


//symbol
let uniqueSymbol = Symbol('unique');


//object
let person = {
    name: 'Dipesh',
    age: 25,
    city: 'Kathmandu'
};


// console.table({ num, bignum, name, isOk, emptyValue, notAssigned, uniqueSymbol, person });

// console.log(typeof num); // number

// console.log(typeof undefined);

// console.log(typeof null);



//summary

//primitives: call by value
//reference types: call by reference
// number, bigint, string, boolean, null, undefined, symbol


// Non-primitive types:
// Reference types: object, array, function

let cars = ['Volvo', 'BMW', 'Toyota'];
// console.log(cars[0]); // Volvo
console.log(typeof cars);


let myObj = {
name: 'Dipesh',
age: 25,
city: 'Kathmandu'
};
// console.log(myObj.name); // Dipesh
// console.log(myObj['age']); // 25
console.log(typeof myObj);



const myFunction = function() {
    console.log('This is a function');
}
console.log(typeof myFunction);
myFunction

