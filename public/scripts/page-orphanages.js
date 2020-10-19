//create array with gps coordinates of porto alegre
const poaCoord = [-22.6573347,-50.4270745]

//create map tied to the mapid element
const map = L.map('mapid').setView(poaCoord, 14);

//insert tile layer into map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//change standard marker's icon to the project logo
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],     //width height
    iconAnchor: [29, 68],   //what point will anchor on the map
    popupAnchor: [170,2]    //whar point popup will anchor on the icon
});

function AddMarker({id, name, lat, lng}){
    //create popup
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`);
    //crase = template literals

    L.marker([lat, lng], {icon: icon})
        .addTo(map)
        .bindPopup(popup);
}

const orphanagesList = document.querySelectorAll('.orphanages-list span');

orphanagesList.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    };

    AddMarker(orphanage);
});

function listOrphanages(orphanages){
    //prevents user from openning the orphanade list multiple times
    const alreadyOpened = (document.querySelectorAll('.orphanageList').length > 0);
    
    if(alreadyOpened)
        return;
    
    const orphanagesList = document.querySelectorAll('.orphanages-list span');

    //Create menu div
    const div = document.createElement('div');
    div.id = 'orphanageList';
    div.className = 'orphanageList';
    div.classList.add("animate-up");
    div.setAttribute("onclick", "closeListOrphanages()");
    div.innerHTML = "<p> Lista de orfanatos ou entidades</p><ul>"

    orphanagesList.forEach(span => {
        const orphanage = {
            id: span.dataset.id,
            name: span.dataset.name,
            lat: span.dataset.lat,
            lng: span.dataset.lng
        };
        
        //adicionar lista de orfanatos ao menu  
        div.innerHTML = div.innerHTML + "<li>" + orphanage.name + "</li>";
        //console.log(orphanage);
    });

    div.innerHTML = div.innerHTML + "</ul>"

    //append new div to the document 
    document.body.appendChild(div); 
}

function closeListOrphanages(){
    const element = document.querySelector(".orphanageList");

    element.parentNode.removeChild(element);
}