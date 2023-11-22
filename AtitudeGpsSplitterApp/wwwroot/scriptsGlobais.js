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