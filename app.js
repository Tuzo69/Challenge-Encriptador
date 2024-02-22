let vocales = ["a", "e", "i", "o", "u"];
let vocalesEncriptadas = ["ai", "enter", "imes", "ober", "ufat"]; // Reglas de encriptación

function encriptarTexto() {
  if (comprobarMensaje("input-texto") == "") {
    alert("¡Ingrese algún texto para empezar encriptar!");
  } else {
    let textoEncriptar = document.getElementById("input-texto").value;
    let len = textoEncriptar.length;
    let letrasIndividuales = textoEncriptar.split("");
    let textoEncriptado = "";

    for (let i = 0; i < len; i++) {
      switch (letrasIndividuales[i]) {
        case vocales[0]:
          textoEncriptado += vocalesEncriptadas[0];
          break;

        case vocales[1]:
          textoEncriptado += vocalesEncriptadas[1];
          break;

        case vocales[2]:
          textoEncriptado += vocalesEncriptadas[2];
          break;

        case vocales[3]:
          textoEncriptado += vocalesEncriptadas[3];
          break;

        case vocales[4]:
          textoEncriptado += vocalesEncriptadas[4];
          break;

        default:
          textoEncriptado += letrasIndividuales[i];
      }
    }
    ocultarElementos("imagenes-resultado");
    ocultarElementos("mensaje-rectangulo-1");
    ocultarElementos("mensaje-rectangulo-2");
    mostrarElementos("boton-copiar");
    mostrarTextoEncriptado("texto-resultado", textoEncriptado);
  }
}

function desencriptarTexto() {
  if (comprobarMensaje("input-texto") == "") {
    alert("¡Ingrese algún texto para empezar a desencriptar!");
  } else {
    let textoDesencriptar = document.getElementById("input-texto").value;
    let len = textoDesencriptar.length;
    let letrasIndividuales = textoDesencriptar.split("");
    let textoDesencriptado = "";

    for (let i = 0; i < len; i++) {
      switch (letrasIndividuales[i]) {
        case vocales[0]:
          textoDesencriptado += vocales[0];
          i += vocalesEncriptadas[0].length - 1;
          break;

        case vocales[1]:
          textoDesencriptado += vocales[1];
          i += vocalesEncriptadas[1].length - 1;
          break;

        case vocales[2]:
          textoDesencriptado += vocales[2];
          i += vocalesEncriptadas[2].length - 1;
          break;

        case vocales[3]:
          textoDesencriptado += vocales[3];
          i += vocalesEncriptadas[3].length - 1;
          break;

        case vocales[4]:
          textoDesencriptado += vocales[4];
          i += vocalesEncriptadas[4].length - 1;
          break;

        default:
          textoDesencriptado += letrasIndividuales[i];
          break;
      }
    }
    ocultarElementos("imagenes-resultado");
    ocultarElementos("mensaje-rectangulo-1");
    ocultarElementos("mensaje-rectangulo-2");
    mostrarElementos("boton-copiar");
    mostrarTextoEncriptado("texto-resultado", textoDesencriptado);
  }
}

function ocultarElementos(elemento) {
  let elementoAOcultar = document.getElementById(elemento);
  elementoAOcultar.style.display = "none";
}

function mostrarElementos(elemento) {
  let elementoAMostrar = document.getElementById(elemento);
  elementoAMostrar.style.display = "flex";
}

function mostrarTextoEncriptado(elemento, texto) {
  let textoAMostrar = document.getElementById(elemento);
  textoAMostrar.value = texto;
}

function copiarTexto() {
  let textoCopiar = document.getElementById("texto-resultado");
  textoCopiar.select();
  document.execCommand("copy");
  textoCopiar.blur();
  alert("Texto copiado al portapapeles: " + textoCopiar.value);
}

function comprobarMensaje(elemento) {
  let mensaje = document.getElementById(elemento);
  return mensaje.value;
}
