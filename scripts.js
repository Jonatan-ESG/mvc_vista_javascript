// const formulario = document
function clickBoton() {
    alert('El botón fue clickeado, disparado desde HTML')
}
const botonRealizarOperacion = document.getElementById('botonRealizarOperacion')

botonRealizarOperacion.addEventListener('click', () => {
    alert('El botón fue clickeado, disparado desde el EventListener')
})
