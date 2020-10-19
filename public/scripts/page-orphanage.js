//create array with gps coordinates of lar são josé
const spanCoord = document.querySelector("span[data-lat]");

const orphCoord = [spanCoord.dataset.lat,spanCoord.dataset.lng];

console.log(orphCoord);

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map tied to the mapid element
const map = L.map('mapid', options).setView(orphCoord, 15);

//insert tile layer into map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//change standard marker's icon to the project logo
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],     //width height
    iconAnchor: [29, 68],   //what point will anchor on the map
    popupAnchor: [170,2]    //whar point popup will anchor on the icon
});

//removed popup because I don't want the popup in this new page
L.marker(orphCoord, {icon: icon})
    .addTo(map);

/*image gallery*/
function selectImage(event) {   /*evento de clique*/
    const button = event.currentTarget;

    //remover classes active
    buttons = document.querySelectorAll(".images button");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    //selecionar imagem clicada
    const image = button.children[0];

    const imageContainer = document.querySelector(".orphanage-details > img");

    //atualizar o container de imagem
    imageContainer.src = image.src;

    //adicionar a classe active no botão clicado
    button.classList.add("active");

    //console.log(button.children);
    console.log(buttons);
}