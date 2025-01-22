const amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (!regex.test(nombre)) {
        alert("El nombre solo puede contener letras.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert(`El amigo "${nombre}" ya está registrado.`);
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = "";
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos registrados para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!</li>`;
    amigos.splice(indiceAleatorio, 1);
    actualizarListaAmigos();
}
