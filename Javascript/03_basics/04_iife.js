// Immediately Invoked Function Expression (IIFE)

(function db_connect() {
    console.log("Database connected");
})(); // IIFE ends here  



(() => {
    console.log("Database connected");
})();


// Arrow function IIFE
((name) => {
    console.log(`Database connected for user: ${name}`);
})('John Doe');