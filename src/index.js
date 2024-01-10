'use strict';

const correctPin = document.getElementById('correctPin');
const hintsToRightPin = document.getElementById('hintsToRightPin');
const enteredPin = document.querySelector('input');
const btnSubmit = document.getElementById('btnSubmit');
const btnGetPin = document.getElementById('btnGetPin');

let pinValue;

function getPin() {
    pinValue = Math.floor(Math.random() * (9999-1000 + 1)) + 1000;
   correctPin.textContent = 'O pin correcto é ' + pinValue;
   enteredPin.value = "";
   correctPin.style.display = 'block';
   hintsToRightPin.style.display = 'none';
}


function verifyPin() {

    if (enteredPin.value === ""){
        alert("A caixa de input não pode estar vazia.");
        return;

    } else if(enteredPin.value.length < 4) {
        alert("O PIN tem que ter pelo menos 4 digitos.Tente Novamente!");
        return;

    }
    
    const inputPin = parseInt(enteredPin.value);

    if (inputPin === pinValue) {
        displayMessage("O pin está correcto.", 'green');
        alert("Parabéns, você acertou o PIN.");
    
    } else if((pinValue > inputPin) && ((pinValue - inputPin) > 5000)){
        displayMessage("Erro! Tente um número muito maior.");

    } else if((pinValue > inputPin) && ((pinValue - inputPin) < 5000)) {
        displayMessage("Erro! Tente um número maior.");     

    } else if ((pinValue < inputPin) && ((inputPin - pinValue) > 5000)) {
        displayMessage("Erro! Tente um número muito menor.");
        
    } else if ((pinValue < inputPin) && ((inputPin - pinValue) < 5000)) {
        displayMessage("Erro! Tente um número menor.");
        
    } else {
        alert("O pin tem que ser um número. Tente novamente!");
    }

    function displayMessage(message, color) {
        hintsToRightPin.textContent = message;
        hintsToRightPin.style.color = color;
        hintsToRightPin.style.display = 'block';
        // correctPin.style.display = 'none';
    }

    enteredPin.value = "";
}


btnGetPin.addEventListener('click', getPin);

btnSubmit.addEventListener('click', verifyPin);