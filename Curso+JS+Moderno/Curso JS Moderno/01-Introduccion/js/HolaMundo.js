
//Prompt nos permite mandar una alerta a el navegador, en la que el usuario puede dar datos de entrada
const nombre = prompt('¿Cuál es tu nombre?');

//Query selector nos permite seleccionar y acceder a un contenedor especifico (con una clase)
//Para poder concatenar es necesario usar los backsticks ``
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavaScript`;

console.error("Esto es un error en la consola");
console.warn("Advertencia");