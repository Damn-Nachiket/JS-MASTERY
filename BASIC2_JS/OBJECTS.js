// We can declare objects in two ways : 1- Literal and 2. Constructor

//Singeltone : It is own type of object
//object.create : This is cpnstructor method for singleTone

// When we declare objects in literal then singleTone never happen 
// But when we use construtor it will be singeltone.

// Object Literals : 
// const JSuser = {}

const JSuser = {
    name : "thNac",
    age : 20,
    location : "Ahmedabad",
    email : "world@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Tuesday"]
}

console.log(JSuser.email) ; 
console.log(JSuser["email"]) // This is useful when you provide object values in double quote like : "fullname"

const mySym = Symbol ("key1") // To use this symbol in key of object then nedd to write : [mySym] = "key1"
// For access : console.log(JSuser[mySym])

// To change value = JSuser.email = "google@gmail.com" 
// To lock or freeze = Object.freeze (JSuser)
// JSuser.email = "hello@gmail.com"
// console.log(JSuser)
// Here it will don't change email value because it is freezed before giving value


JSuser.greeting = function(){
    console.log("WE ARE SPARTA")
}
console.log(JSuser.greeting())
// console.log(Jsuser.greeting) ; Function not execute it gives just reference

JSuser.greetingTwo = function(){
    console.log(`Hello user , ${this.name}`)
} // This is use to reference same object and values.

console.log(JSuser.greetingTwo())


// ------------------------------- This object creation with the help of constructor---------------------------

const tinderUser = new Object () // This is singeltone
// const tinderUser = {} // This is non-singeltone

tinderUser.id = "abc123"
tinderUser.name = "Jimmy"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const reg_user = {
    email : "hello@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Nachi",
            lastname : "Patel"
        }
    }
}

// console.log(reg_user.fullname.userfullname.firstname) // One way

console.log(reg_user.fullname?.userfullname.lastname) // This is secure way
// Here with question mark value if it doesn't exist then print other ; it is like if-else

const obj1 = { 1:"a" , 2:"b" }
const obj2 = { 3:"a" , 4:"b" }
const obj3 = { 5:"a" , 6:"b" }

// const obj4 = {obj1, obj2, obj3} // simple
// const obj4 = Object.assign(obj1,obj2,obj3)
// const obj4 = Object.assign({} , obj1 , obj2 , obj3) // This is better {} - this is target , other are source

// const obj4 = {...obj1 , ...obj2 , ...obj3} // 90% use

// When values come from database this method is used.

const users = [{ id:1, name:"hello"} , 
               { id:2, name:"world"}
]

users[1].name // This will access 1 object - name
console.log(Object.keys(tinderUser.id));
// Output value datatype is : array , we take all keys and put it in one array we can apply loop on it.
// We can take out values like that keys.
// Entries also used : it combines keys and values.

// To check property existance: console.log(tinderUser.hasOwnProperty('isLogged'));

