/* 
Ejercicio 1

Calcula cuantas horas le llevaria llegar a la luna a una nave espacial y guarda el resultado en una variable.

La distancia desde la tierra hasta la luna es de 384.400 km.

La velocidad de la nave es de 1225 km por hora.

*/

let distanciaLuna = 384400;
let velocidadNave = 1225;

// tiempo = distancia / velocidad

let tiempoViaje;

tiempoViaje = distanciaLuna / velocidadNave;

console.log(
    "Una nave tarda en llegar de la tierra a la luna: " + tiempoViaje + " horas"
); // Devuelve 313.7959183673469 horas

console.log(
    "Una nave tarda en llegar de la tierra a la luna: " +
    Math.ceil(tiempoViaje) + " horas" // Metodo Math.ceil devuelve el entero más pequeño que es mayor o igual a un número determinado
);
