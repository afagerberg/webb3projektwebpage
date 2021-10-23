"use strict";

let worktableEl = document.getElementById("worktable");
let worklistEl = document.getElementById("worklist");

window.addEventListener("load", getAllJobs);

function getAllJobs(){
    worklistEl.innerHTML = "";
    worktableEl.innerHTML = "";

    fetch("http://localhost/webb3projekt/workexperience")
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