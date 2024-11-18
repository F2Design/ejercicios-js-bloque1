/* 

Ejercicio 8

Tengo una heladeria y cada bola de helado vale 1.8 euros.

Cuanto cuestan los vasos de 1, 2 y 3 bolas de helado?

Tener en cuenta que el barquillo cuensta 50 centimos de euro.

*/

const precioBolaHelado = 1.8;
const precioBarquillo = 0.5;

let heladoUnaBola = precioBolaHelado * 1 + precioBarquillo; // los () en la operaciones aritmeticas los puedo usar para darle prioridad
let heladoDosBolas = precioBolaHelado * 2 + precioBarquillo;
let heladoTresBolas = precioBolaHelado * 3 + precioBarquillo;

console.log(
    `
    1. Precio de 1 vaso de helado con barquillo es de: ${heladoUnaBola} euros
    2. Precio de 2 vasos de helado con barquillo es de: ${heladoDosBolas} euros
    2. Precio de 3 vasos de helado con barquillo es de: ${heladoTresBolas} euros
    `
);
