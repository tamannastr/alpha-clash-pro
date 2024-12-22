// function play(){
//     // hide the home screen by clicking play now...
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the playground by clicking play now.....
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     console.log(homeSection.classList)
// }
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    if(playerPressed === 'Escape'){
        gameOver();
    }

//get the expected to press
const currentAlphabetElement = document.getElementById('current-alphabet')
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerPressed,expectedAlphabet);
//check matched or not
if(playerPressed === expectedAlphabet)  {

    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore)

    // //1.get the current score
    // const currentScoreElement = document.getElementById('current-score')
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText)
    // //2.increase the number by 1
    // const newScore = currentScore + 1 ;
    //  //3.show the updated score
    // currentScoreElement.innerText = newScore; 
    // console.log(newScore);
    removeBackgroundColorById(expectedAlphabet)
    continueGame();

}
else {
    console.log('you missed.you lost a life')
    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);
    if(updatedLife === 0){
        gameOver()
    }




    //1.get the current life score
    //3.display the updated score
    // const currentLifeElement = document.getElementById('current-life')
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // //2.reduce the life count
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;
}

}


//captured keyboard key press
document.addEventListener('keyup',handleKeyboardKeyUpEvent)


function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
function play(){
    ///hide everything only show playground 
    hideElementById('home-screen');
    hideElementById('final-score'); 
    showElementById('play-ground');
    continueGame();
    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}