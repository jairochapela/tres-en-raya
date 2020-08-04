const {mejorJugada} = require('../src/app.js')
const assert = require('assert')

describe("Mejor jugada", function () {
    it ("Tablero ocupado en el centro", function () {
        const tablero = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ]
        let {fila, columna} = mejorJugada(tablero)
        assert.ok(!(fila == 1 && columna == 1))
    })
   
    it ("Fila central ocupada", function () {
        const tablero = [
            [0, 0, 0],
            [1, 1, 2],
            [0, 0, 0]
        ]
        let {fila, columna} = mejorJugada(tablero)
        assert.ok(fila != 1)
    })

    it ("Todo ocupado excepto (1,1)", function () {
        const tablero = [
            [2, 1, 2],
            [1, 0, 2],
            [2, 1, 1]
        ]
        let {fila, columna} = mejorJugada(tablero)
        assert.equal(fila, 1)
        assert.equal(columna, 1)
    })
})