let score1= 33
let score2 = "33abc"
console.log(typeof(score1))
console.log(typeof(score2))

let valueInNumber1 = Number (score1)
let valueInNumber2 = Number (score2)
console.log(typeof(valueInNumber1))
console.log(typeof(valueInNumber2))

// 33 => 33
// 33abc => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true , 0 => falsee , true => 1 , false => 0 , "" => false , "abc" => true

let n = 3
let stringNumber = String(n)
console.log(typeof(stringNumber))
console.log(typeof(n))

// ----------------------------------------- PROBLEMS IN CONVERSION ---------------------------------------

console.log("2" > 1)
console.log( null > 0 )
console.log( null == 0 )
console.log (null >= 0) 

console.log( undefined > 0 )
console.log( undefined == 0 )
console.log( undefined >= 0) 

// HERE THERE IS SOME PROBLEM IN NULL : you will get first two false and 3 is true because the first two auto convert the null to 0 so it gives fales

// SO IN JS .. equality, comparision and conversion all are different things

// ( === ) , it will strictly check all vlaues.