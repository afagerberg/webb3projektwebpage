"use strict";

let menubars = document.getElementsByClassName("menubars");
let menu = document.getElementById("menu");

function openmenu(x) {
    
    x.classList.toggle("change");
    if (menu.style.height === "100vh") {
        menu.style.height = "0"
    } else {
        menu.style.height = "100vh";

    }
    
}

//dropdown döljs när scroll to-länk klickas


