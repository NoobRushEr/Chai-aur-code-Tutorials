const user = {
    username: "dipesh",
    price: 100,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
user.username = "ramesh"
// user.welcomeMessage()

// console.log(this);


function chai(){
    let username = "dipesh"
    console.log(this.username);
}

// chai()

const chai2 = () => {
    let username = "dipesh"
    console.log(this.username);
}

// chai2()


const add = (num1, num2) => {
    return num1 + num2;
}

console.log(add(5, 10));


// implicit return
const multiplytwo = (num1, num2) => (num1 * num2);

console.log(multiplytwo(5, 10));