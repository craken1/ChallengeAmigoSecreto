// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Eliminar espacios al principio y al final

    // Expresión regular para validar que solo contenga letras (incluye acentos y espacios entre nombres)
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que no contenga números ni caracteres especiales
    if (!regex.test(nombre)) {
        alert("El nombre solo puede contener letras.");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombre)) {
        alert(`El amigo "${nombre}" ya está registrado.`);
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Mostrar la lista de amigos en la página
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos <li>
    for (let amigo of amigos) {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

// Función para seleccionar un amigo al azar y eliminarlo de la lista
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos registrados para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!</li>`;

    // Eliminar el amigo sorteado del array
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista visible en el HTML
    actualizarListaAmigos();
}

 