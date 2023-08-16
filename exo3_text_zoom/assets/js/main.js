"use strict";

let currentSize = 1; // Valeur initiale de la taille de police en rem

function changeFontSize  (delta) {
	currentSize += delta;
	document.body.style.fontSize = currentSize + "rem";
};

document.querySelector("#decrease").addEventListener("click", e => {
	changeFontSize(-0.1);
});

document.querySelector("#increase").addEventListener("click", e => {
	changeFontSize(0.1);
});
