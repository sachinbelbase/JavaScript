let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let mycreatedDate = new Date(2023,11, 21, 5 , 3)
let mycreatedDate = new Date("2026-01-5");
// console.log(mycreatedDate.toDateString())
// console.log(mycreatedDate.toLocaleString())

let myTimestamps = Date.now()

// console.log(myTimestamps);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})