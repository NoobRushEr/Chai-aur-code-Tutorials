// Singleton
// Object.create


// object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "ramesh",
    [mysym]: "MyKey1",
    age: 23,
    location: "kathmandu",
    email: "ramesh@company.com",
    isLoggedin: true
}

console.log(JsUser['name']);
console.log(JsUser[mysym]);

JsUser['location'] = "pune"

console.log(JsUser['location']);

// Object.freeze(JsUser)

JsUser['age'] = 22

console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello Js User");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetings);
JsUser.greetings();
JsUser.greetingsTwo();
