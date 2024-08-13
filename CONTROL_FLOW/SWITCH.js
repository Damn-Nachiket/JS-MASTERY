const month = 3
switch (month){
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("February");
        break;
    case 3 :
        console.log("March");
        break;
    case 4 :
        console.log("April");
        break;
    default :
        console.log("END");
        break;
}

// Here in cases if we don't define break statement then it will execute remain all cases except default.

// Truthy & Falsy Values :

// When we assume that the value is true then it is called truthy value.

// Falsy Value list : false , 0 , -0 , null , undefined , BigInt 0n , "" , NaN

// Truthy Value list : true , "0" , "false" , {} , [] , " " , function(){}