/* 
Ejercicio 10

Fui con 2 amigos, Pepe y Manolo a comer hamburguesas, yo me comi 2 hamburguesas, Pepe se comio 3 hamburguesas y Manolo 6 hamburguesas.

¿Cuántas hamburguesas nos comimos todos en total?
¿Es cierto que yo comí menos hamburguesas que Pepe?

Responder estas dos preguntas devolviendo el resultado en la consola del navegador.

*/

const hamburguesasFredy = 2;
const hamburguesasPepe = 3;
const hamburguesasManolo = 6;

// Calcular el total de hamburguesas
totalHamburguesas = hamburguesasFredy + hamburguesasPepe + hamburguesasManolo;

// Comparar mi cantidad con la de Pepe
const comiMemosPepe = hamburguesasFredy < hamburguesasPepe;

console.log('En total comimos ' + totalHamburguesas + ' hamburguesas');
console.log('¿Es cierto que comí menos hamburguesas que Pepe? ' + comiMemosPepe);
