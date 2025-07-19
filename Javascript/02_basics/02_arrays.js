
const marver_heros = ["Thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "Batman", "Flash"]

// marver_heros.push(dc_heros)
// console.log(marver_heros);


// const all_heros = marver_heros.concat(dc_heros)
// console.log(all_heros);


// spread operator
const all_heros = [...marver_heros, ...dc_heros]
console.log(all_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(3)
console.log(real_another_array);


console.log(Array.isArray("Dipesh"))
console.log(Array.from("Dipesh"))
console.log(Array.from({name: "dipesh"})) //tricky case
 
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4));
