const score = 400
const balance = new number (100)
console.log(balance)

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNum = 23.5823
console.log(otherNum.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// Type this in Browser console

// Number.MAX_VALUE
// Number.MAX_SAFE_INTEGER

// ------------------------------MATHS-------------------------------

console.log(Math)
console.log(Math.abs(-4)) // COnvert negetavive value to positive value
console.log(Math.round(4.3)) // It will round of the value
console.log(Math.ceil(4.2)) // It will give uppper value 
console.log(Math.floor(4.2)) // It will give lower value 

// This part where Math Library used most

console.log(Math.random());
console.log(Math.random()*10+1);
console.log((Math.random()*10) +1 );

const min = 10
const max = 30

// Math.random() * (max-min+1) + min // formula to generate random value between min and max values

console.log(Math.floor(Math.random() * (max-min+1)) + min)

