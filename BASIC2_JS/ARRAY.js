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