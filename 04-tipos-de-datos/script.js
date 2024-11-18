
let frase = 'Hola';      // String o cadena de texto
let anio = 2024;         // Numero entero / int
let interes = 2.7;       // Numero decimal (real) / float / double
let mayorEdad = true;    // Booleano (True o False)
let vacio;               // Undefined
let nula = null;         // Null

let fruta = [ 'Fresa', 'Mora', 'Uva' ]; // Array (arreglo) es una coleccion de datos
let heroe = {nombre: 'Batman', universo: 'DC' }; // Objeto

console.log(frase, interes, mayorEdad);

// Operador de tipo (typeof)
// Permite ver el valor de una variable
console.log(typeof frase); // Imprime que ese tipo de dato es un - String
console.log(typeof anio); // Imprime que ese tipo de dato es un - number
console.log(typeof interes); // Imprime que ese tipo de dato es un - number
console.log(typeof mayorEdad); //Imprime que ese tipo de dato es un - boolean
console.log(typeof vacio); // Imprime que ese tipo de dato es - undefined
console.log(typeof nula); // Imprime que ese tipo de dato es - object (pero es un error en JS)

console.log(typeof fruta); // Imprime que ese tipo de dato es - object
console.log(typeof heroe); // Imprime que ese tipo de dato es - object
console.log(Array.isArray(fruta)); // Imprime que ese tipo de dato es un array - true