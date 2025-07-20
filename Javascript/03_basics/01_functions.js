// function

function Sayhello(){
    console.log("Hello World!!");
}

// Sayhello();


function Add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return NaN;
    }
    return num1 + num2;
}

console.log(Add(10, 20));



function subtract(num1=20, num2=10){
    return num1 - num2;
}

let result1 = subtract(89, 13);
let result2 = subtract();
console.log(`${result1} ${result2}`);



function calculate_cart_price(...num1){
    return num1.reduce((a, b) => a + b, 0);

}

console.log(calculate_cart_price(1000, 2000, 3000, 780, 130));


const user = {
    name: 'John',
    price: 100
}


function handleObject1(object){
    console.log(object.name, object.price);
}
handleObject1(user);

function handleObject2({name, price}){
    console.log(name, price);
}

handleObject2(user);