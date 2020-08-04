/**
 * Tablero de juego, inicialmente vacío.
 */
var tablero = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

/**
 * Función para colocar una ficha en la posición
 * indicada para el jugador en cuestión.
 * @param {*} fila 
 * @param {*} columna 
 * @param {*} jugador (puede ser 1 ó 2)
 */
function ponerFicha(fila, columna, jugador) {
    if (tablero[fila][columna] == 0)
        tablero[fila][columna] = jugador;
    else
        throw new Error("Casilla ya ocupada");

    redibujarTablero();
}



const imagenes = [
    "img/hueco.svg",
    "img/circulo.svg",
    "img/cruz.svg"
];

/**
 * Redibuja el tablero, actualizando su aspecto según el estado reflejado
 * en tablero.
 */
function redibujarTablero() {
    for (let fila = 0; fila < tablero.length; fila++) {
        for (let columna = 0; columna < tablero[fila].length; columna++) {            
            document
                .getElementById("c-"+fila+"-"+columna)
                .setAttribute("src", imagenes[tablero[fila][columna]])
        }        
    }
}


/**
 * Acción de jugar lanzada por el usuario. Coloca la ficha en el tablero,
 * invoca la jugada de la máquina y actualiza el estado.
 * @param {*} fila Fila donde coloca su ficha.
 * @param {*} columna Columna donde coloca su ficha.
 */
function jugar(fila, columna) {
    try {
        ponerFicha(fila, columna, 1)
        jugarMaquina()
    } catch(err) {
        alert(err.message)
    }
}


/**
 * Jugada hecha por la máquina.
 */
function jugarMaquina() {
    let {fila, columna} = mejorJugada(tablero);
    ponerFicha(fila, columna, 2);
    redibujarTablero();
}



/**
 * Calcula la mejor jugada y retorna un objeto {fila, columna} con
 * la posición resultante.
 * @param {*} t Estado del tablero.
 */
function mejorJugada(t) {
    for (let fila = 0; fila < 3; fila++) {
        for (let columna = 0; columna < 3; columna++) {
            if (t[fila][columna] == 0)
                return {fila, columna}
        }
    }
}

/**
 * Comprueba si en el tablero t hay un ganador. Esta función devolverá
 * 1 ó 2 dependiendo de si gana el usuario o la máquina, o 0 si todavía
 * no ha ganado nadie.
 * @param {*} t Estado del tablero.
 */
function ganador(t) {
    return 0;
}

module.exports = {
    ponerFicha,
    mejorJugada,
    jugar,
    ganador
}