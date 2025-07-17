// Dates

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.getTime());
console.log(mydate.getDay());
console.log(mydate.getMonth());


let mycreateddate = new Date(2025, 7, 13)//year, month, date
console.log(mycreateddate);
console.log(mycreateddate.toDateString());
console.log(mycreateddate.toLocaleDateString());

let mycreateddate1 = new Date("2025/11/28")//year, month, date
console.log(mycreateddate1);
console.log(mycreateddate1.toDateString());
console.log(mycreateddate1.toLocaleDateString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(Math.floor(mytimestamp / 1000)); //seconds
console.log(mycreateddate.getTime());



console.log
(mydate.toLocaleDateString('default', 
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
))

