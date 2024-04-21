function verificarRespuesta(respuestaCorrecta) {
  var opciones = document.getElementsByName('pais');
  var respuestaSeleccionada;

 for (var i = 0; i < opciones.length; i++) {
  if (opciones[i].checked) {
    respuestaSeleccionada = opciones[i].value;
    break;
  }
}

  if (respuestaSeleccionada === respuestaCorrecta) {
    showAnswer('La Respuesta correcta es ' + respuestaCorrecta);
  } else {
    mostrarError();
  }
}

function showAnswer(answer) {
  alert(answer);
}

function mostrarError() {
  alert("¡Respuesta incorrecta!");
}

function mostrarAlerta() {
  alert("¡Respuesta correcta!");
} 

document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  const nombre = params.get("nombre");
  if (nombre) {
    const titulo = document.createElement("h1");
    titulo.textContent = "¡Hola, " + nombre + "! Bienvenido de nuevo a la Trivia Viajera";
    document.body.insertBefore(titulo, document.body.firstChild);
  }
});

