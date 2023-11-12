window.googleMapsConsoleGreeting = function () {
    console.log("Mapa carregado com sucesso.");
}

window.mapa = null;
window.AdvancedMarkerElement = null;
function initMap() {
    var latlng = new google.maps.LatLng(-23.959011, -46.331825);
    var options = {
        zoom: 14, center: latlng,
        mapId: 'xxxxxxxxxxxxxxxxx'
    };

    mapa = new google.maps.Map(document.getElementById("map"), options);
    AdvancedMarkerElement = google.maps.importLibrary("marker");
}

function moveToLocation(lat, lng) {
    const center = new google.maps.LatLng(lat, lng);
    window.mapa.panTo(center);
}