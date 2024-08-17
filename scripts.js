// const formulario = document

const botonRealizarOperacion = document.getElementById('botonRealizarOperacion')

botonRealizarOperacion.addEventListener('click', realizarOperacion)

function realizarOperacion() {
    const primerNumero = parseInt(document.getElementById('primerNumero').value)
    const segundoNumero = parseInt(document.getElementById('segundoNumero').value)

    const selectorOperacion = document.getElementById('selectorOperacion')
    const operacionSeleccionada = selectorOperacion.options[selectorOperacion.options.selectedIndex].value

    let resultado = 0

    switch (operacionSeleccionada) {
        case 'RESTA':
            resultado = primerNumero - segundoNumero
            break
        case 'SUMA':
            resultado = primerNumero + segundoNumero
            break
    }

    document.getElementById('resultado').innerHTML = resultado
}
