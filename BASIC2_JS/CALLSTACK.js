// Javascript Execution Context -  To execute JS file this is used. JS execute file in 2 phase.
// Code - Global Execution Context - this
// JS is singleThreaded

// These are 3 types : 1. Global Execution Context 2. Functional Context 3. Eval Execution Context

// 1. Memory Creation phase or creation phase or memoery phase
// 2. Execution Phase

// Process of Code execution

let val1 = 10
let val2 = 5

const addnum = (num1,num2) =>{
    let total = num1 + num2
    return total
}

let result1 = addnum(val1,val2)
let result2 = addnum(20,5)

console.log(result1)
console.log(result2)

// 1. Global Execution -> this
// 2. Memory Phase 
    // val1 -> undefined , val2 -> undefined , addnum -> undefined , result1 -> undefined , result2 -> undefined
// 3. Execution Phase
    // val1 -> 10 , val2 -> 5 , addnum -> execution context created here (When its work done it will delete)
                                // new variable environment + execution thread
                                    // Memory Phase           // Execution Phase
                                    // val1 -> undefined      // num1 -> 10
                                    // val2 -> undefined      // num2 -> 5
                                    // total -> undefined     // total -> 15 (This will return to global execution context)

// Call Stack

// In browser : source -> create file (One.js)

function one(){
    console.log("One")
    two()
}

function two(){
    console.log("Two")
    three()
}

function three(){
    console.log("Three")
}

one()
two()
three()