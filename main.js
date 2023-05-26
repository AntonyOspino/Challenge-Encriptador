const textoEntrada = document.getElementById("textoEntrada");
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const textoSalida = document.getElementById("textoSalida");
const copiar = document.getElementById("copiar");
let imagen = document.getElementById("mi-imagen");
let parrafo1 = document.getElementById("parrafo1")
let parrafo2 = document.getElementById("parrafo2");

let isEncripted = ()=>{
  let regex = /ai|enter|imes|ober|ufat/g;
  return regex.test(textoEntrada.value);
  };

let transformed;

const isLowerCase = (texto) => {
  return texto === texto.toLowerCase();
};

const voc_r = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
};

const inv_voc_r = Object.fromEntries(
  Object.entries(voc_r).map(([key, value]) => [value, key])
);

function Encriptar(tex){
  if(!isEncripted()){
  transformed = '';
  transformed = tex.replace(/(a|e|i|o|u)/g, (vocal) => { return voc_r[vocal] });
  textoSalida.innerText = transformed;
  }
}

function Desencriptar(tex){
  if(isEncripted()){
  transformed = '';
  transformed = tex.replace(/(ai|enter|imes|ober|ufat)/g, (t) => { return inv_voc_r[t] });
  textoSalida.innerText = transformed;
  }
}

function Copiar(textoSalida) {
  textoEntrada.value = textoSalida;
  navigator.clipboard.writeText(output).then(() => console.log("texto copiado")).catch(err => console.log("No se pudo copiar el texto", err));
}

// Función para verificar si hay texto en textoEntrada
function verificarTexto() {
  const textoEntrada = document.getElementById("textoEntrada").value.trim();
  const imagen = document.getElementById("mi-imagen");
  const parrafo1 = document.getElementById("parrafo1");
  const parrafo2 = document.getElementById("parrafo2");
  const textoSalida = document.getElementById("textoSalida");
  const botonCopiar = document.getElementById("copiar");

  if (textoEntrada !== "") {
    // Ocultar elementos
    imagen.style.display = "none";
    parrafo1.style.display = "none";
    parrafo2.style.display = "none";

    // Mostrar elementos
    textoSalida.style.display = "block";
    botonCopiar.style.display = "block";
  } else {
    // Mostrar elementos
    imagen.style.display = "block";
    parrafo1.style.display = "block";
    parrafo2.style.display = "block";

    // Ocultar elementos
    textoSalida.style.display = "none";
    botonCopiar.style.display = "none";
  }
}

encriptar.addEventListener("click", () => { (isLowerCase(textoEntrada.value)) ? Encriptar(textoEntrada.value) : alert("El texto tiene mayuscula") });

desencriptar.addEventListener("click", () => {(isLowerCase(textoEntrada.value)) ? Desencriptar(textoEntrada.value) : alert("Texto tiene mayusculas")});

copiar.addEventListener("click", () => {Copiar(textoSalida.innerText)});

textoEntrada.addEventListener("input", verificarTexto);