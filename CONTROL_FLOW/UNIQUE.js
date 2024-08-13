// Array check of Empty :

const email = []
if (email.length === 0 ){
    console.log("Empty")
}

const empObj = {}
if (Object.keys(empObj).length === 0){
    console.log("Object is Empty")
}

// Nullish Coalescing Operator ( ?? ) : null Undefined
// This operator is desigened to do the safety check of null and undefined.

let val1;
val1 = 5 ?? 10
val1 = null ?? 5
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



// Terniary Operator
// condition ? true : false

const icePrice = 100
icePrice <= 80 ? console.log("Less Than 80") : console.log("More than 80");