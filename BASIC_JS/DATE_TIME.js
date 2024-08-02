// DATE : By default it is January 1, 1970 , it will count from there only. It is arbitary value.

// Temporal Liberary for date to use DATE as MATH library. Coming soon be updated with it.

let myDate = new Date ()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())

let myCreatedDate = new Date (2023 , 0 , 1);
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000) // use math floor for clean output 
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long",
    weekmonth : "short"
})