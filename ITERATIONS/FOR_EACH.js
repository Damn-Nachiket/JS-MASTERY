// Most Used Loop in Array : For Each

const coding = [ "JS" , "PYTHON" , "CPP" , "JAVA" ]

coding.forEach( function (val){
    console.log(val)
})     // This is callback function

coding.forEach( (i) => {
    console.log(i)
})     // This is arrow callback function

function printMe(item){
    console.log(item)
}

coding.forEach((item , index , arr) => {
    console.log(item , index , arr)
})

const myCode = [
    {
        languageName : 'Javascript',
        fileName : 'Master'
    },
    {
        languageName : 'Python',
        fileName : 'Killer'
    },
    {
        languageName : 'Java',
        fileName : 'Monster'
    },
]

myCode.forEach((item) =>{
    console.log(item.languageName)
})