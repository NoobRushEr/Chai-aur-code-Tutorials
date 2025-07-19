// array

const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[1]);


const mynames = ["ramesh", "suresh", "rajesh"]
// console.log(mynames);

const arr = new Array(1, 2, 3, 4, 5)

// console.log(arr);


// Array methods

myArr.push(6)
myArr.push(7)
myArr.push(8)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

// insert from start
myArr.unshift(10)
// console.log(myArr);

// remove from start
myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(7));
// console.log(myArr.indexOf(8));

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

console.log("A ",myArr);

const myn1= myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("B ", myArr);

