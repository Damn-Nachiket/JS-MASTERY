// Here This is keyword which is udeful inside object and Arrow is function

const user = {
    movie_name : "Fight Club",
    price : 299,
    welcome_message : function(){
        console.log(`${this.movie_name} , You can watch this`)
    }
}

// This keyword refers current context
user.welcome_message()
user.movie_name = "Taxi Driver"

// Global Object in browser is "window"
// This value is Empty object

function chai(){
    console.log(this)
}
chai()

// In function you can't use this keyword

const coffee = () => {             // Remove function word and add Arrow sign it is called arrow function.
    let movie_name = "Crazy"
    console.log(movie_name)
}

coffee()

// Basic Arrow Function
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(17 , 89))