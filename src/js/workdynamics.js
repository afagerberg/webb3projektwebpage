//DT173G Projekt webbsida, Alice Fagerberg
"use strict";
// Variabler
let worktableEl = document.getElementById("worktable");
let worklistEl = document.getElementById("worklist");

window.addEventListener("load", getAllJobs);
//Läser in och skriver ut arbetserfarenhet
function getAllJobs(){
    worklistEl.innerHTML = "";
    worktableEl.innerHTML = "";

    fetch("https://dt173g_portfolio_restapi.afagerberg.se/workexperience")
    .then(response => response.json())
    .then(data =>{
       data.forEach(job =>{
        worktableEl.innerHTML +=
        `<tr>
            <td>${job.title}</td>
            <td>${job.workplace}</td>
            <td>${job.startdate}</td>
            <td>${job.enddate}</td>
        </tr>`; 

           worklistEl.innerHTML +=
           `<ul class="listingwork">
                <li><strong>Arbetstitel: </strong> ${job.title}</li>
                <li><strong>Arbetsplats: </strong> ${job.workplace}</li>
                <li><strong>Från: </strong> ${job.startdate}</li>
                <li><strong>Till: </strong> ${job.enddate}</li>
                </ul>`;
       }) 
    })
}