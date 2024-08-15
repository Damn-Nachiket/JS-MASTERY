// for of : This are array specific loops

// ["" , "" , ""]
// [{} , {} , {}] // This are some common scenario

const arr = [1,2,3,4,5]
for ( const num of arr){
    console.log(num)
}

const greetings = "Good Day"
for (const greet of greetings){
    console.log(`Each char is : ${greet}`)
}

// MAPS

const maps = new Map()
maps.set('IN' , 'India')
maps.set('AU', 'Australia')
maps.set('FR', 'France')
console.log(maps)

// In map if you give repeat value then it will not print it. Map Is known for unique value return.

for (const [key , value] of maps){
    console.log(key ,':-' , value )
}

// const myObj = {
//     'game1' : 'GTA5',
//     'game2' : 'CS2'
// }

// for (const [key , value] of myObj){
//     console.log(key , ":-" , value)
// }

// This is not a way to iterate object



// ******************** FOR In *******************************

const myObj2 = {
    "js" : "Javascript",
    "py" : "Python",
    "rb" : "Ruby"
}

for (const key in myObj2){
    console.log(`${key} shortcut is for ${myObj2[key]}`)
}

const programming = [ "JS" , "PYTHON" , "JAVA" , "PHP" , "CPP" ]
for (const languages in programming){
    console.log(`${programming[languages]} is Programming Language`)
}
