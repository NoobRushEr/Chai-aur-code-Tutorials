
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "sameer"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "name@email.com",
    fullname:{
        userfullname:{
            firstname: "sameer",
            lastname: "sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a"}
const obj2 = {2: "b"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);


const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@mail.com"
    },
    {
        id: 2,
        email: "q@mail.com"
    },
    {
        id: 3,
        email: "d@mail.com"
    },
]

// console.log(users[2].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));



const course = {
    coursename: "python",
    price: 599,
    courseInstructor: "ramesh"
}

const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "sameer",
//     "coursename": "python in marathi",
//     "price": "free"
// }


[

    {},
    {},
    {}
]