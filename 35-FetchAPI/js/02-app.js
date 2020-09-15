const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    const url = 'data/empleado.json';
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML(resultado) )
}

function mostrarHTML({ empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
    <p>Empresa: ${empresa}</p>
    <p>ID: ${id}</p>
    <p>Empleado: ${nombre}</p>
    <p>Trabajo: ${trabajo}</p>
    `;
}