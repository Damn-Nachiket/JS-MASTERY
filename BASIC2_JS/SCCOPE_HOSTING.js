// Scope - closure : DOM ( Document Object Model ) (DOM is how html webpage manipulated)
// Nested Scope

function one (){
    const uname = "Nachi"
    function two(){
        const website = "Ethio"
        console.log(uname + website)
    }
    console.log(website)
}
console.log(username)

// Here we are checking what is the scope of a nested function here username console is out of scope so it will not execute
// also website is inside function two and we declare out of it so it also not executable function.

// Interesting - Mini Hosting

function addone (num) {
    return num+1
}

addone(5)

const addTwo = function(num){ // addTwo is expression
    return num+2
}
addTwo(6) 

// If we declare function that is written with expression above the function then it will give error
// But the first way will not give error whenever you want you can declare function.