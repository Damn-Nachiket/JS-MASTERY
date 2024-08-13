const balance = 1000
if (balance < 500){
    console.log("Less than 500")
}
else if (balance < 750){
    console.log("Less than 750")
}
else if (balance < 900){
    console.log("Less than 900")
}
else {
    console.log("Greater than 1000")
}

const userLoggedIn = true 
const debitCard = true
const userLoggedInFromGoogle = true
const userLoggedInFromEmail = false 

if (userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

// && : this operator check both variable are true then it will execute statement otherwise one of them is wrong then it will not execute.

if (userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("User Logged In")
}

// This check multiple condition if one of them is true then it will be executed.