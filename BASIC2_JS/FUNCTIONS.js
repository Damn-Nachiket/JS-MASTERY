// Function is not complex. The code you write 5,10,15 lines we closed it in package we can take that package anywhere and use copies of it.

function sayMyName () {
    console.log("H")
    console.log("E")
    console.log("Y")
}

sayMyName() // When add paranthesis it is executed otherwise it is referenced

function addTwo (number1, number2) // Parameters
{
    console.log(number1 + number2)
} 

addTwo (3 , 4)

function add (number1,number2){
    let result = number1 + number2
    return result // whatever writter after return statement then it will does not execute.
}

const result = add ( 10 , 20)
console.log("Result : ", result)

function loginMessage (username) {
    return `${username} just logged in`
}

console.log(loginMessage("Hello"))

function loginMessage (uname = "Sam"){
    if(uname === undefined){
        console.log("Please Enter Username")
        return
    }
    return `${uname} just logged in`
}

console.log(loginMessage()) // console.log(loginMessage("Walter"))

