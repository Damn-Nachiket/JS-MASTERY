function calculateCartPrice (val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,100,2000,1400))

const user = {
    uname : "Nachi",
    lname : "Patel",
    uId : 2254342
}

function handyObject (anyObject) {
    console.log(`Username is ${anyObject.uname} and UserId is ${anyObject.uId}`)
}

handyObject(user)

const myNewArray = [200,199,300,100,560,789]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));