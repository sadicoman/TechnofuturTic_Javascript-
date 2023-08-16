"use strict";
/*méthode 4*/
// window.onload = function () {
// 	let date = new Date();
// 	let dates2 = document.querySelector(".date4");

// 	if (dates2) {
// 		document.write(
// 			`<div class="date4">Nous sommes le ${date.toLocaleDateString()}</div>`,
// 		);
// 	}
// };

/*1er exemple*/
let dates = document.querySelector(".date");
var d = new Date();
var date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
dates.innerHTML = date;

/*2e exemple*/
let dates2 = document.querySelector(".date2");
dates2.textContent = date; 


/*3e exemple*/

function afficherDate3() {
	var d = new Date();
	var date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
	document
		.getElementById("date3")
		.appendChild(document.createTextNode(date));
}
afficherDate3();

