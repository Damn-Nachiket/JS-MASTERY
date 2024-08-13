//if 
// if (true){ executable } ; if (false) { non executable }

// comperasion operator : < , > , <= , >= , == , != , === , !==

// else : In if the statement does not execute then else part will be executed

const score = 200
if (score > 100){
    const power = "fly"
    console.log(` user power {power}`); 
}
console.log(`user power : {power}`); // not execute because it is out of scope

// short hand notation:

const balance = 1000
if (balance > 500) console.log("Texrt") // Implicit scope

