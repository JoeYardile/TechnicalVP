import GameRound from './modules.js'
import {drawHangman} from './modules.js'

function buttons() {
    let oldButtons = document.getElementById("alphabet-buttons");
    while (oldButtons.firstChild) {
        oldButtons.removeChild(oldButtons.firstChild);
    }
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let buttons = document.getElementById('alphabet-buttons');
    for (let i = 0; i < alphabet.length; i++) {
        let button = document.createElement('button');
        button.innerHTML = alphabet[i];
        button.classList.add("btn", "btn-lg", "btn-secondary", "letter-button");
        buttonCheck(button);
        buttons.appendChild(button);
    }
}

function buttonCheck(button) {
    button.onclick = function () {
        button.classList.add("disabled");
        button.onclick = null;
        let guessedLetter = (this.innerHTML);
        if (GameRound.word.indexOf(guessedLetter) === -1) {
            setLives(GameRound.lives -= 1);
            drawHangman(GameRound.lives);
        } else {
            for (let i = 0; i < GameRound.word.length; i++) {
                if (GameRound.word[i] === guessedLetter) {
                    document.querySelectorAll(".letter")[i].innerHTML = guessedLetter;
                    GameRound.emptySpaces -= 1;
                }
            }
        }
        if(GameRound.emptySpaces === 0) {
            finishedGame(true);
        } else if(GameRound.lives === 0) {
            finishedGame(false);
        }
    }
}

function letters() {
    let oldLetters = document.getElementById("word-letters");
    while (oldLetters.firstChild) {
        oldLetters.removeChild(oldLetters.firstChild);
    }
    const dictionary = ["antidisestablishmentarianism", "bikes", "cheeseburgers", "crackerjack", "fusion", "mammalian"];
    GameRound.word = dictionary[Math.floor(Math.random() * dictionary.length)];
    GameRound.emptySpaces = GameRound.word.length;
    let letters = document.getElementById("word-letters");
    for(let i = 0; i < GameRound.word.length; i++) {
        let letter = document.createElement("li");
        letter.className = "letter";
        letter.innerHTML = "_";
        letters.appendChild(letter)
    }
}

function finishedGame(winner) {
    let colour = "";
    if(winner === true) {
        GameRound.wins += 1;
        document.getElementById("wins").innerHTML = GameRound.wins;
        colour = "#98FB98";
    } else {
        GameRound.losses += 1;
        colour = "#FA8072";
    }
    let letters = document.querySelectorAll('.letter');
    let buttons = document.querySelectorAll('.letter-button');
    for(let i = 0; i < letters.length; i++){
        letters[i].style.color = colour;
    }
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.add("disabled");
        buttons[i].onclick = null;
    }
}

document.getElementById("resetGame").addEventListener("click", resetGame);


function setLives(lives) {
    GameRound.lives = lives;
    document.getElementById("lives").innerHTML = lives;
}

function resetGame() {
    let canvas = document.getElementById("hangman");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    canvas.height = canvas.clientHeight;
    setLives(11);
    letters();
    buttons();
}

resetGame();