//DT173G Projekt webbsida, Alice Fagerberg
"use strict";

//variabler
let webplistEl = document.getElementById("webplist");

//Händelselyssnare
window.addEventListener("load", getAllwebpages);

//Hämtar alla webbsidor och skriver ut
function getAllwebpages(){
    webplistEl.innerHTML = "";

    fetch("https://dt173g_portfolio_restapi.afagerberg.se/webpages")
    .then(response => response.json())
    .then(data =>{
       data.forEach(webpage =>{
           webplistEl.innerHTML +=
           `<li><strong class="webtitle">${webpage.title}</strong>
            <p>${webpage.pagedescription}</p>
            <a href="${webpage.pageurl}" target="_blank"> Webblänk </a>
            </li>`;
       }) 
    })
}

