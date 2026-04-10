// sistema.js
// Gerenciador de playlist de músicas

var playlist = [];
var duracaoTotal = 0;
var controleBooleano = false;
var relatorioTexto = "";

// Converte minutos e segundos em um total.
function converterParaSegundos(minutos, segundos) {
    var totalSegundos = minutos * 60 + segundos;
    return totalSegundos;
}

// Converte segundos para minutos:segundos.
function formatarDuracao(totalSegundos) {
    var minutos = Math.floor(totalSegundos / 60);
    var segundos = totalSegundos % 60;

    if (segundos < 10) {
        return minutos + ":0" + segundos;
    }

    return minutos + ":" + segundos;
}

// Busca uma música pelo nome na playlist.
function buscarMusicaPorNome(listaMusicas, nomeMusica) {
    var resultado = null;

    for (var i = 0; i < listaMusicas.length; i++) {
        if (listaMusicas[i].nome == nomeMusica) {
            resultado = listaMusicas[i];
        }
    }

    return resultado;
}

// Confirma se o volume esta entre 0 e 100.
function validarVolume(volume) {
    if (volume == null) return false;
    if (typeof volume !== "number") return false;
    if (volume < 0) return false;
    if (volume > 100) return false;

    return true;
}

// Calcula a duração total das músicas.
function calcularDuracaoTotal(listaMusicas) {
    var total = 0;

    for (var i = 0; i < listaMusicas.length; i++) {
        total = total + listaMusicas[i].duracao;
    }

    duracaoTotal = total;
    return total;
}

// Alterna o status de favorita de uma música.
function alternarFavorita(indice) {
    if (indice >= 0 && indice < playlist.length) {
        playlist[indice].fav = !playlist[indice].fav;
    }
}

// Filtra músicas por uma categoria (artista ou gênero).
function filtrarPorPropriedade(listaMusicas, valor, propriedade) {
    var resultado = [];

    for (var i = 0; i < listaMusicas.length; i++) {
        if (listaMusicas[i][propriedade] == valor) {
            resultado.push(listaMusicas[i]);
        }
    }

    return resultado;
}

// Conta quantas músicas são favoritas.
function contarFavoritas(listaMusicas) {
    var contador = 0;

    for (var i = 0; i < listaMusicas.length; i++) {
        if (listaMusicas[i].fav == true) {
            contador = contador + 1;
        }
    }

    return contador;
}

// Retorna uma lista ordenada por nome.
function ordenarPorNome(listaMusicas) {
    var copia = listaMusicas.slice();

    copia.sort(function (a, b) {
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
    });

    return copia;
}

// Troca duas músicas de posição na lista.
function trocarPosicoes(listaMusicas, posicao1, posicao2) {
    if (posicao1 < 0 || posicao1 >= listaMusicas.length) return;
    if (posicao2 < 0 || posicao2 >= listaMusicas.length) return;

    var temp = listaMusicas[posicao1];
    listaMusicas[posicao1] = listaMusicas[posicao2];
    listaMusicas[posicao2] = temp;
}

// Retorna músicas com duração menor ou igual ao limite.
function filtrarPorDuracaoMaxima(listaMusicas, limiteSegundos) {
    var resultado = [];

    for (var i = 0; i < listaMusicas.length; i++) {
        if (listaMusicas[i].duracao <= limiteSegundos) {
            resultado.push(listaMusicas[i]);
        }
    }

    return resultado;
}

// Adiciona uma nova música a playlist.
function adicionarMusica(nome, artista, genero, minutos, segundos) {
    var musica = {};

    musica.nome = nome;
    musica.artista = artista;
    musica.genero = genero;
    musica.duracao = converterParaSegundos(minutos, segundos);
    musica.fav = false;

    playlist.push(musica);
}

// Mostra as músicas da playlist na interface.
function mostrarPlaylist() {
    for (var i = 0; i < playlist.length; i++) {
        var elemento = document.getElementById("musica" + i);

        if (elemento) {
            elemento.innerHTML =
                playlist[i].nome +
                " - " +
                playlist[i].artista +
                " (" +
                formatarDuracao(playlist[i].duracao) +
                ")";
        }
    }
}

// Gera e retorna o relatório da playlist.
function gerarRelatorio() {
    var texto = "";

    texto += "=== RELATORIO DA PLAYLIST ===\n";
    texto += "Total de musicas: " + playlist.length + "\n";
    texto += "Favoritas: " + contarFavoritas(playlist) + "\n";
    texto +=
        "Duracao total: " +
        formatarDuracao(calcularDuracaoTotal(playlist)) +
        "\n\n";

    for (var i = 0; i < playlist.length; i++) {
        var favorito = "";

        if (playlist[i].fav == true) {
            favorito = " [FAVORITA]";
        }

        texto +=
            i +
            1 +
            ". " +
            playlist[i].nome +
            " - " +
            playlist[i].artista +
            " (" +
            formatarDuracao(playlist[i].duracao) +
            ")" +
            favorito +
            "\n";
    }

    relatorioTexto = texto;
    console.log(texto);

    return texto;
}
