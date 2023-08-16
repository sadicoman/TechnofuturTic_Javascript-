"use strict";

let nom2 = "Szczepkowski";
let prenom2 = "Francois";
let langue2 = "fr";

function afficher2() {
    let tmp = "";
    if (langue2 == "fr") tmp = "Bonjour";
    else if (langue2 == "en") tmp = "Hello";
    alert(tmp + " " + prenom2 + " " + nom2 + " !");
}

/*v2*/
document.addEventListener("DOMContentLoaded", () => {
    let nom = "Szczepkowski";
    let prenom = "Francois";
    let langue = "fr";

    document.getElementById("linkHello").addEventListener("click", (e) => {
        e.preventDefault();
        afficher();
    });

    document.getElementById("linkFrancais").addEventListener("click", (e) => {
        e.preventDefault();
        setLangue("fr");
    });

    document.getElementById("linkAnglais").addEventListener("click", (e) => {
        e.preventDefault();
        setLangue("en");
    });

    const setLangue = (lang) => {
        langue = lang;
    };

    const afficher = () => {
        let tmp = "";
        if (langue == "fr") tmp = "Bonjour";
        else if (langue == "en") tmp = "Hello";
        alert(tmp + " " + prenom + " " + nom + " !");
    };
});
