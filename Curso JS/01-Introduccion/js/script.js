const nombre = prompt('¿Cuál es tu nombre?');
// este query selector te permite seleccionar elementos del HTML
document.querySelector('.contenido').innerHTML = `${nombre}, estás aprendiendo JavaScript Moderno</h2>`;