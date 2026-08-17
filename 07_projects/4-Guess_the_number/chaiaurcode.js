let randomNumber = parseInt(Math.random()*100 + 1)
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
//The guessed numbers will be stored in an array and shown to the user
let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        //console.log(guess);
        //passing this guess to validate (validateGuess function)
        validateGuess(guess);
    })
}
function validateGuess (guess) {
    // Validate the user input (between 100 or not/ Is a number/ NaN etc)
    if(isNaN(guess)){
        alert('Please enter a valid number!')
    } else if(guess < 1){
        alert('Please enter a valid number!')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    } else{
        //Pushing the guessed number into the array 
        prevGuess.push(guess);
        //Now if this is the players last guess then:
        if(numGuess > 10){
            cleanUpGuess(guess)
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        }
        else{
            cleanUpGuess(guess)
            checkGuess(guess)//Higher or Lower or Correct guess msg will be displayed in the checkGuess function
        }
    }
}
function checkGuess(guess) {
    //Check if the guess is equal to the random number generated
    if(guess === randomNumber){
        displayMessage('You guessed the number!!!')
        endGame();
    }
    else if(guess > randomNumber) {
        displayMessage('Number is lower')
    }
       else if(guess < randomNumber) {
        displayMessage('Number is higher')
    }
}
function cleanUpGuess (guess) {
    //Clean previous guess,  Update array and guess remaining
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(msg) {
    //Low or high message
    lowOrHi.innerHTML = `<h2> ${msg}</h2>`;
}
function endGame(){
    //
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame (){
    //
      const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });

}

