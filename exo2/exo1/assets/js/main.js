"use strict";
let dates = document.querySelector(".date");

let date =
    new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear();
dates.innerHTML = date;
