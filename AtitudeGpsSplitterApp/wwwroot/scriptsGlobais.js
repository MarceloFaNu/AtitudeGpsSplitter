// Google Maps
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

function moveToLocation(coords) {
    const center = new google.maps.LatLng(coords.lat, coords.lng);
    window.mapa.panTo(center);
}

window.marcadores = [];
window.funcoesDoMapa = {
    // Adds a marker to the map and push to the array.
    adicionaMarcador: function (objCoords) {
        var marker = new google.maps.Marker({
            position: { lat: objCoords.lat, lng: objCoords.lng },
            title: objCoords.tit
        });

        marcadores.push(marker);
        return marcadores.indexOf(marker);
    },

    // Sets the map on all markers in the array.
    setMapEmTodosOsMarcadores: function (map) {
        for (let i = 0; i < marcadores.length; i++) {
            marcadores[i].setMap(map);
        }
    },

    preencheArrayDeMarcadores: function (arrayDeCoords) {
        this.excluiMarcadores();
        for (let i = 0; i < arrayDeCoords.length; i++) {
            this.adicionaMarcador(arrayDeCoords[i]);
        }

        this.setMapEmTodosOsMarcadores(mapa);
    },

    // Removes the markers from the map, but keeps them in the array.
    ocultaMarcadores: function () {
        this.setMapEmTodosOsMarcadores(null);
    },

    // Deletes all markers in the array by removing references to them.
    excluiMarcadores: function () {
        this.ocultaMarcadores();
        marcadores = [];
    },

    obtemIndiceDeMarcador: function (id) {
        let indice = -1;
        for (let i = 0; i < marcadores.length; i++) {
            if (marcadores[i].title === id.toString()) {
                indice = i;
                break;
            }
        }

        return indice;
    },

    alteraCorDoMarcador: function (id, cor, la, lo) {
        let indice = this.obtemIndiceDeMarcador(id);
        if (indice < 0) {
            indice = this.adicionaMarcador({ lat: la, lng: lo, tit: id.toString() });
        }

        let marcador = marcadores[indice];
        let t = marcador.title;

        console.log(
            "id: " + id + "\n" +
            "cor: " + cor + "\n" +
            "lat: " + la + "\n" +
            "lng: " + lo + "\n" +
            "indice: " + indice + "\n" +
            "title: " + marcador.title
        );

        // Remove o marcador a ser substituído
        marcador.setMap(null);
        marcadores.splice(indice, 1);

        let marker;

        if (cor === null || cor === undefined) {
            marker = new google.maps.Marker({
                position: { lat: la, lng: lo },
                title: t
            });
        } else {
            // Change the background color.
            let pinBackground = new google.maps.marker.PinElement({
                background: cor,
                borderColor: '#008800',
                glyphColor: '#008800'
            });

            marker = new google.maps.marker.AdvancedMarkerElement({
                position: { lat: la, lng: lo },
                title: t,
                content: pinBackground.element,
            });
        }

        marker.setMap(mapa);
        marcadores.splice(indice, 0, marker);
    },

    destacaMarcador: function (snapshot) {
        this.alteraCorDoMarcador(snapshot.id, "#00FF00", snapshot.lat, snapshot.lng);
    },

    restauraMarcador: function (snapshot) {
        this.alteraCorDoMarcador(snapshot.id, null, snapshot.lat, snapshot.lng);
    }
}

// LocalStorage
window.localStorageManager = {
    adicionaItem: function (chave, valor) {
        localStorage.setItem(chave, valor);
    },

    obtemItem: function (chave) {
        return localStorage.getItem(chave);
    },

    retiraItem: function (chave) {
        localStorage.removeItem(chave);
    },

    limpaStorage: function () {
        localStorage.clear();
    }
}