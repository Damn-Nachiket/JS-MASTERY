// On whom destructiring happens : 1. Array and 2. Object

const movies = {
    movie_name : "Interstellar",
    price : "200",
    movie_dir : "Nolan"
}

// movies.movie_dir
const {movie_dir} = movies
console.log(movie_dir)

const {movie_dir : director} = movies
// This is destructuring we change movie_dir to director

// IN React
// const navbar : ({company}) => {

// }
// navbar (company = "Ethio")
// When we see curly brace in object it is destructring

// --> API (JSON) :
// {
//     "name" : "Tenet",
//     "director" : "Nolan",
//     "price" : "200"
// }

// Rnadom username : This is website which provides api ; JSON Formatter to understand API file.