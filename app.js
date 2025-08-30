// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombre);
    input.value = "";
    mostrarListaAmigos();
    limpiarResultado();
  }
}

function mostrarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indice = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigos[indice]}</li>`;
  }
}