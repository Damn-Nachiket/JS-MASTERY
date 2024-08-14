// Iterations : for Loop

// This is Basic Loop
for (let i = 0; i <= 10;  i++) {
    const element = i;
    console.log(element)
}                    

// Nested Loop

for ( let i = 0 ; i <= 10 ; i++){
    console.log(`The outer loop value is ${i}`)
    for (let j = 0 ; j <= 10 ; j++){
        console.log(`The inner loop value is ${j} and outer loop value is ${i}`)
    }
}

// This program will print table from 1 to 10 of given value

for ( let i = 1 ; i <= 10 ; i++){
    console.log(`The outer loop value is ${i}`)
    for (let j = 1 ; j <= 10 ; j++){
        console.log( i + '*' + j + '=' + i*j)
    }
}


// ********** Break and Continue ************

// This is break where it will detect the value given in condtion it will stop the loop there.
for (let index = 0 ; index <= 10 ; index++){
    if(index == 5){
        console.log(" Number 5 Detected ")
        break
    }
    console.log(` Value in list is ${index}`)
}


// This is continue where you get chance to continue after the condition reached 
for (let index = 0 ; index <= 10 ; index++){
    if(index == 5){
        console.log(" Number 5 Detected ")
        continue
    }
    console.log(` Value in list is ${index}`)
}