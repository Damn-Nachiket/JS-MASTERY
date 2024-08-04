const myArr = [ 0 , 1 , 2 , 3 , 4 , "thNac" , true] // This is syntax of array

// Shallow Copy = copy share the same reference point
// Deep Copy = Share does not smae reference point

// Access Array Prototype in Browser Console.

// Array Methods

console.log(myArr.push(6))
console.log(myArr.pop())
console.log(myArr.unshift())
console.log(myArr.shift())
console.log(myArr.includes(9))
console.log(myArr.indexOf(6))

// This part use many time in real life

const newArr = myArr.join() // It will bind array together in the form of (1,3,4,4,5...) as well as convert it into string

console.log( " A ", myArr)

const myN1 = myArr.slice( 1, 3) // It don't manipulate it just print range of value
console.log(myN1)
console.log( " B " , myArr)

const myN2 = myArr.splice( 1, 3) // It Is Manipulative it can remove all entered range value
console.log(myN2)
console.log( " C ", myArr)

// web console:

// const myArr = [1,2,3,4]
// myArr

const heros = ["Walter White", "Jessy Pinkman" , "Montana"]
const villians = [ "Tuco", "Dahmer" , "Pablo"]

heros.push(villians)
console.log(heros) // It will takes array as an element inside another value

const together = heros.concat(villians)
console.log(together)

const all_new = [...heros , ...villians] //sprade operator
//This is sprade here this is not single array its elements are now become individual
console.log(all_new)

const another_array = [1,2,3,[4,5,6],7,[8,9,[10]]]
const usable_array = another_array.flat(Infinity)
console.log(usable_array)

console.log(Array.isArray("Nachi")) // It will check value whether it is present in array
console.log(Array.from("Nachi")) // It will convert string to an array

console.log(Array.from({name: "Nachi"}))
// Interesting Situation ; it will return empty [] array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// Read more about Array from , is and of.

