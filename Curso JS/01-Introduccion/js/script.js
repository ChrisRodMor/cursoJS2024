// Pide el nombre del usuario
const nombre = prompt('¿Cuál es tu nombre?');

// este querySelector te permite seleccionar elementos del HTML
// innerHTML permite insertar código HTML
// las comillas invertidas permiten interpolar variables con ${}
// Esta funcion, al ejecutarse, pide el nombre del usuario y lo inserta en el HTML
document.querySelector('.contenido').innerHTML = `${nombre}, estás aprendiendo JavaScript Moderno`;

// Asigna el valor hacia la variable producto
const producto = 'Monitor 24 pulgadas';