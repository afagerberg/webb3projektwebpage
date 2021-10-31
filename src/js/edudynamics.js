//DT173G Projekt webbsida, Alice Fagerberg
"use strict";
// Variabler
let edutableEl = document.getElementById("edutable");
let edulistEl = document.getElementById("edulist");

//Händelselyssnare
window.addEventListener("load", getAllEducations);

//Hämtar alla utbildningar och skriver ut
function getAllEducations(){
    edulistEl.innerHTML = "";
    edutableEl.innerHTML = "";

    fetch("https://dt173g_portfolio_restapi.afagerberg.se/completedstudies")
    .then(response => response.json())
    .then(data =>{
       data.forEach(education =>{
        edutableEl.innerHTML +=
        `<tr>
            <td>${education.coursecode}</td>
            <td>${education.cname}</td>
            <td>${education.program}</td>
            <td>${education.eduplace}</td>
            <td>${education.startdate}</td>
            <td>${education.enddate}</td>
        </tr>`; 

           edulistEl.innerHTML +=
           `<ul class="listingedu">
                <li><strong>Kurskod: </strong> ${education.coursecode}</li>
                <li><strong>Kursnamn: </strong> ${education.cname}</li>
                <li><strong>Program: </strong> ${education.program}</li>
                <li><strong>Lärosäte: </strong> ${education.eduplace}</li>
                <li><strong>Startdatum: </strong> ${education.startdate}</li>
                <li><strong>Slutdatum: </strong> ${education.enddate}</li>
           </ul>`;
       }) 
    })
}