const name = "Dipesh"
const repos = 18

console.log(name + repos);

console.log(`${name} has ${repos} repositories.`);


const gamename = new String('Call of Duty');
console.log(gamename); // [String: 'Call of Duty']

console.log(gamename.__proto__); // String.prototype
console.log(gamename.length);
console.log(gamename.toLocaleUpperCase());
console.log(gamename.charAt(9));
console.log(gamename.indexOf('of'));
console.log(gamename.replace('Call', 'Battle'));
console.log(gamename.includes('Duty')); // true
console.log(gamename.split(' ')); // [ 'Call', 'of', 'Duty' ]




