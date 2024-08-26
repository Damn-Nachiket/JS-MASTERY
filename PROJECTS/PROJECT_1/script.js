const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === "powderblue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "blanchedalmond"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "plum"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "lavenderblush"){
            body.style.backgroundColor = e.target.id
        }
    })
})