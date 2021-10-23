"use strict";

//variabler
let webplistEl = document.getElementById("webplist");

//Händelselyssnare
window.addEventListener("load", getAllwebpages);

//Hämtar alla kurser och skriver ut
function getAllwebpages(){
    webplistEl.innerHTML = "";

    fetch("http://localhost/webb3projekt/webpages")
    .then(response => response.json())
    .then(data =>{
       data.forEach(webpage =>{
           webplistEl.innerHTML +=
           `<li><span class="webtitle">${webpage.title}</span>
            <p>${webpage.pagedescription}</p>
            <a href="${webpage.pageurl}" target="_blank"> Webblänk </a>
            </li>`;
       }) 
    })
}

