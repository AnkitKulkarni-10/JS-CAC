const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey' //Or we can write e.target.id (It is also 'grey')
        }
        console.log(e.target);
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'white' //Or we can write e.target.id (It is also 'white')
        }
        console.log(e.target);
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue' //Or we can write e.target.id (It is also 'blue')
        }
        console.log(e.target);
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow' //Or we can write e.target.id (It is also 'yellow')
        }
    })
} )
