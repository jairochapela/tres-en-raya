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
}