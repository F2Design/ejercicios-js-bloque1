// Variables
//Es un contenedor que se utiliza para almacenar datos que pueden cambiar durante la ejecución de un programa. Las variables permiten a los desarrolladores guardar valores, como números, cadenas de texto, objetos, arreglos, y más.

/* 
! var nombre = 'Fredy'; // Ya casi no se usa, forma clasica y tiene problemas

* let apellido = 'Frasser'; // Se usa mas porque tiene un alcance de bloque, es decir es mas flexible
* const nacionalidad = 'Colombia'; // Define una variable cuyo valor no cambia
*/

let heroe = 'Spiderman';
let universo = 'Marvel';
let edad = 50;

let heroe_y_universo = heroe + ' es un superheroe de ' + universo; // Concatenacion

// Cambiare el valor de la variable heroe
heroe = 'Batman';
universo = 'DC';
edad = 25;


console.log(heroe, universo, edad);
alert(heroe_y_universo); // Quedan guardados los primeros valores