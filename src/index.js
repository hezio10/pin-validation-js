'use strict';

const correctPin = document.getElementById('correctPin');
const hintsToRightPin = document.getElementById('hintsToRightPin');
const enteredPin = document.querySelector('input');
const btnSubmit = document.getElementById('btnSubmit');
const btnGetPin = document.getElementById('btnGetPin');

let pinValue;

function getPin() {
    pinValue = Math.floor(Math.random() * (9999-1000 + 1)) + 1000;
   correctPin.textContent = 'O pin correcto e ' + pinValue;
   enteredPin.value = "";
   correctPin.style.display = 'block';
   hintsToRightPin.style.display = 'none';
}


function verifyPin() {


    if (enteredPin.value === ""){
        alert("A caixa de input nao pode estar vazia");
        return;

    } else if(enteredPin.value.length < 4) {
        alert("O PIN tem que ter pelo menos 4 digitos.Tente Novamente!");
        return;
    }
    
    const pin = parseInt(enteredPin.value);
        
 

    if (pin === pinValue) {
        displayMessage("O pin esta correcto", 'green');
        alert("Parabens, voce acertou o PIN.");

    } else if(pinValue > pin) {
        displayMessage("Erro! Tente um numero maior.");
        

    } else if (pinValue < pin) {
        displayMessage("Erro! Tente um numero menor.");
        
    } else {
        alert("O pin tem que ser um numero. Tente novamente!");
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