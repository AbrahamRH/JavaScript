//Quitar los espacios


//inicio

let espaciosInicio = "       hola";

console.log("Con el espaciado: " , espaciosInicio);

console.log("Sin el espaciado: " , espaciosInicio.trimStart());

let espaciosFin = "hola              "
console.log("Con el espaciado: " , espaciosFin);

console.log("Sin el espaciado: " , espaciosFin.trimEnd());

let espacios = "          hola          ";


let variosEspacios = " hola este tiene varios espacios y quiero ver si se quitan todos";

console.log("Sin el espaciado: " , espacios.trimStart().trimEnd());

// =

console.log("Sin el espaciado: trim solo" , variosEspacios.trim());