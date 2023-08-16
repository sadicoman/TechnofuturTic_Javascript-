"use strict";

function afficheHeure() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	var HorlogeHours = document.querySelector(".horloge__el--hours");
	var HorlogeMinutes = document.querySelector(".horloge__el--minutes");
	var HorlogeSeconde = document.querySelector(".horloge__el--seconde");

	HorlogeHours.innerHTML = hours;
	HorlogeMinutes.innerHTML = minutes;
	HorlogeSeconde.innerHTML = seconds;
}
setInterval(afficheHeure, 1000);
