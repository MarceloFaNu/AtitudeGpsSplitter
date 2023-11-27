// Google Maps
window.mapsManager = {
    mapa: null,
    AdvancedMarkerElement: null,
    marcadores: [],

    googleMapsConsoleGreeting: function () {
        console.log("Mapa carregado com sucesso.");
    },

    initMap: function () {
        var latlng = new google.maps.LatLng(-23.959011, -46.331825);
        var options = {
            zoom: 14, center: latlng,
            mapId: 'xxxxxxxxxxxxxxxxx'
        }

        this.mapa = new google.maps.Map(document.getElementById("map"), options);
        this.AdvancedMarkerElement = google.maps.importLibrary("marker");
    },

    moveToLocation: function(coords) {
        const center = new google.maps.LatLng(coords.lat, coords.lng);
        this.mapa.panTo(center);
    },

    adicionaMarcador: function (objCoords) {
        var marker = new google.maps.Marker({
            position: { lat: objCoords.lat, lng: objCoords.lng },
            title: objCoords.tit
        });

        this.marcadores.push(marker);
        return this.marcadores.indexOf(marker);
    },

    setMapEmTodosOsMarcadores: function (map) {
        for (let i = 0; i < this.marcadores.length; i++) {
            this.marcadores[i].setMap(map);
        }
    },

    preencheArrayDeMarcadores: function (arrayDeCoords) {
        this.excluiMarcadores();
        for (let i = 0; i < arrayDeCoords.length; i++) {
            this.adicionaMarcador(arrayDeCoords[i]);
        }

        this.setMapEmTodosOsMarcadores(this.mapa);
    },

    ocultaMarcadores: function () {
        this.setMapEmTodosOsMarcadores(null);
    },

    // Deletes all markers in the array by removing references to them.
    excluiMarcadores: function () {
        this.ocultaMarcadores();
        this.marcadores = [];
    },

    obtemIndiceDeMarcador: function (id) {
        let indice = -1;
        for (let i = 0; i < this.marcadores.length; i++) {
            if (this.marcadores[i].title === id.toString()) {
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

        let marcador = this.marcadores[indice];
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
        this.marcadores.splice(indice, 1);

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

        marker.setMap(this.mapa);
        this.marcadores.splice(indice, 0, marker);
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