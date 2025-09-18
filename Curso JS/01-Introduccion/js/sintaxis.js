//declarar una variable
const hola = "Hola eso tilin";

//imprimir en consola
console.log(hola);

//alerta
//alert(hola);

//comentario de una linea
/* comentario
de
varias
lineas
*/

//numeros
console.log(123456);
console.log([1, 2, 3, 4, 5]);

//tabla
console.table([1, 2, 3, 4, 5]);

//errores
console.error("Esto es un error");

//advertencia
console.warn("Esto es una advertencia");

//informacion
console.info("Esto es una informacion");

//comprobar el tiempo
/*console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…"); */

//finalizar el tiempo
/*console.timeEnd("answer time");*/

//contar
// console.count();
console.count("veces");

//limpiar consola
// console.clear();

//crear un array
const arr = [1, 2, 3, 4, 5];
console.log(arr);

//crear un objeto
const obj = {
    nombre: "Juan",
    apellido: "Gonzalez",
    edad: 30,
    correo: "juan.gonzalez@example.com",
    pais: "Argentina"
};
console.log(obj);
console.table(obj);

//crear una funcion
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Chrixnux");

//crear un bucle
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//crear una condicion
if (true) {
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}