const score = 400;
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); // "100.00"

const otherBalance = 200.456;
console.log(otherBalance.toFixed(2)); // "200.46"
console.log(otherBalance.toPrecision(4)); // "200.5"

const bigNumber = 12345678901234567890;
console.log(bigNumber.toLocaleString()); // "12,345,678,901,234,567,890"


console.log(Math.PI);
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.min(1, 2, 3, 4, 5));


console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 100); // Random number between 0 and 100
console.log(Math.floor(Math.random() * 100)); // Random integer between 0 and 99

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between min and max



