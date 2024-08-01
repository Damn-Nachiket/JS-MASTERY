// I AM FIRST WRITING ABOUT SOME ECMA Standards.

// "use strict"; treat all js code as per the newer version of js

// alert ("WARNING") it will show warning pop-up on screen.
// alert (3 + 3)  it can run in browser console but we are using node so it will not work here.

// ECMA Standards write all standards of our javascript.
// URL : https://262.ecma-international.org/

// -----------------------------------------------DATA-TYPES----------------------------------------------

// There are basically two type of data-type exist.

// 1. PREMITIVE 2. NON-PREMITIVE

// 1. PREMITIVE: In this type there are 7 sub types

//     7 types: 
        // a. String 
            let s = "HELLO"
            console.log(typeof(s))
        // b. Number
            let n = 20
            console.log(typeof(n))
        // c. Boolean
            let b = true
            console.log(typeof(b))
        // d.Null
            console.log(typeof(null))
        // e.Undefined
            let unde1
            console.log(typeof(unde1));
        // f. Symbol
            let num1 = Symbol('1') ; num2 = Symbol('1')
            console.log( num1 === num2)
            console.log(typeof(num1))
        // g. BigInt
            let Bignum1 = 92988328949848772489274839393n
            console.log(Bignum1);
            console.log(typeof(Bignum1));

    // 2. NON-PRIMITIVE (REFERENCE TYPE) : There are 3 sub parts.

            // a. Array
                let heros = ["WALTER WHITE" , "JESSY PINKMAN" , "HARRY POTTER"]
                console.log(typeof(heros))

            // b. Object
                let myObj = {
                    name : "Walter White",
                    work : "Business",
                    location : "LA"
                }
                console.log(typeof(myObj))

            // c. Function
                let myfun = function (params) {
                    console.log("Gotham City is under Risk")
                }
                console.log(typeof(myfun))

            
            
            