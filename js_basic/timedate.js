// time & date in js //
// date is an object in js 
let mydate  = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleString())
console.log(mydate.toTimeString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.getTimezoneOffset())
console.log(mydate.toUTCString())
// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

console.log(`${newDate.getDay()} and the time `)

newDate.toLocaleString('default', {weekday: "long",})
