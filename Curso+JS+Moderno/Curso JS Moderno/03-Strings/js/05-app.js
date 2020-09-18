//Replace slice y substring


const producto = "Monitor de 50 Pulgadas";

//Replace

console.log(producto.replace("Pulgadas",'"'));

console.log(producto.replace("Monitor",'Monitor curvo'));

//Slice:  para cortar


console.log(producto.slice(0,10));

console.log(producto.slice(8)); //Corta de ese numero hacia atras


console.log(producto.slice(2,1)); //No hace nada

console.log(producto.substring(2,1));


//CharAt

console.log(producto.charAt(0));


