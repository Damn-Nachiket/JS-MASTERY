const name = "thNac"
const repoCount = "40"

// console.log( name + "Has" + repoCount + "repos" ); ------ THIS IS NOT GOOD PRACTICE TO USE OR CONCAT STRING

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // THIS IS RIGHT METHOD : STRING INTERPOLATION

const gameName = new String ('thNac-007')

console.log(gameName[0]);

// console.log(gameName.__proto__);  ---- IT IS USED FOR DEFINE STRING METHODS

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,5)
console.log(newString);

const anoString = gameName.slice(-2,4)
console.log(anoString)

const newStringOne = "    thNac   "
console.log(newStringOne.trim())

