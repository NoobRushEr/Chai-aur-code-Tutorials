// var c = 200  // avoid var it does not have local/block scope

let a = 200;
if(true){
    let a = 10
    const b = 20
   console.log(`Inner: ${a}`);
}

console.log(`Outer: ${a}`);
// console.log(b);


function One(){
    const username = "dipesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();    
}

One();

//

// Hoisting    Execution context

console.log(addOne(5)); //success
function addOne(num){
    return num + 1;
}


addTwo(5);//error
const addTwo = function(num){
    return num + 2;
}