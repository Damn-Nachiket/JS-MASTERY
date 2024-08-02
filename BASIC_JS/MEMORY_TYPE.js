// IN JAVASCRIPT THERE ARE TWO TYPES OF MEMORY : 1. STACK AND 2. HEAP

let myName = "thNac"
let anotherName = myName;
anotherName = "thNac007"

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "world@gmail.com",
    upi : "IamMortal@ibl"
}

let userTwo = {
    email : "prithvi@gmail.com"
}
// let userTwo = userOne
userTwo.email = "user@google.com"

console.log(userOne.email)
console.log(userTwo.email)