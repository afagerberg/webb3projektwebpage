"use strict";
//Variabler
let menubars = document.getElementsByClassName("menubars");
let menu = document.getElementById("menu");
let bar1 = document.getElementById("b1");
let bar2 = document.getElementById("b2");
let bar3 = document.getElementById("b3");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let logo = document.getElementById("logolink");

let bannernav = document.getElementById("bannernav");

//öppna dropdownmeny
function openmenu() {
    
    
    if (menu.style.height === "100vh") {
        menu.style.height = "0";

        //grund ikon bars
        bar1.style.marginLeft = "0";
        bar2.style.marginright = "0";
        bar3.style.marginLeft = "0";  
        
    } else {
        menu.style.height = "100vh";
        //dynamik ikon bars
        bar1.style.marginLeft = "-10px";
        bar2.style.marginright = "-10px";
        bar3.style.marginLeft = "-10px";

        logo.addEventListener("click", function() {

            menu.style.height = "0";
            //grund ikon bars
            bar1.style.marginLeft = "0";
            bar2.style.marginright = "0";
            bar3.style.marginLeft = "0";
        
    })


        a1.addEventListener("click", function() {
                window.setTimeout(function(){menu.style.height = "0"},1000);
                //grund ikon bars
                bar1.style.marginLeft = "0";
                bar2.style.marginright = "0";
                bar3.style.marginLeft = "0";
            
        })
        a2.addEventListener("click", function() {
        
                window.setTimeout(function(){menu.style.height = "0"},1000);
                //grund ikon bars
                bar1.style.marginLeft = "0";
                bar2.style.marginright = "0";
                bar3.style.marginLeft = "0";
            
        })
        a3.addEventListener("click", function() {
            
                window.setTimeout(function(){menu.style.height = "0"},1000);
                //grund ikon bars
                bar1.style.marginLeft = "0";
                bar2.style.marginright = "0";
                bar3.style.marginLeft = "0";
           
        })
        a4.addEventListener("click", function() {

                window.setTimeout(function(){menu.style.height = "0"},1000);
                //grund ikon bars
                bar1.style.marginLeft = "0";
                bar2.style.marginright = "0";
                bar3.style.marginLeft = "0";
            
        })
        
    }
    
}



