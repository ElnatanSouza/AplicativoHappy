// Criação do Mapa
const map = L.map("mapid").setView([-27.2193376, -49.6506112], 15);

// Criação e adição do tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// Criação de icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Criação do popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage" > <img src="./public/images/arrow-white.svg" > </a>')


// Criação e adição do Marcador (pop-up)
L
.marker([-27.2193376, -49.6506112], { icon })
.addTo(map)
.bindPopup(popup)