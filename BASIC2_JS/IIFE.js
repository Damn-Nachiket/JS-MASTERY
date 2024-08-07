// function db(){
//     console.log("DB CONNECTED")
// }
// db()

// IIFE Example : 
(function chai(){  // This is named IIFE
    console.log("DB CONNECTED")
})();    // Here Semicolon is must required to end function execution

( (name) => {   // This is simple IIFE
    console.log(`DB CONNECTED by ${name}`)
})('Nachi')

// IIFE Is not a function which execute any function immediately.
// TO prevent from global scope pollution we use IIFE.