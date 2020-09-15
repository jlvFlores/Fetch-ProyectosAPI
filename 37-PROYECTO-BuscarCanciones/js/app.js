import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e) {
    e.preventDefault();

    // Obteber datos de formulario
    const artista = document.querySelector('#artista').nodeValue;
    const cancion = document.querySelector('#cancion').nodeValue;

    if(artista === '' || cancion === '') {
        // campos vacios
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeouta(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }
}