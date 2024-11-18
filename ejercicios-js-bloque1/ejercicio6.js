/* 
Ejercicio 6

En mi tienda de video juegos tenemos una oferta.
Si compras un juego de 50 euros o mas, te hacemos un 20% de dto,
si un cliente compra el FIFA 24 que cuesta 50 euros,
Cuanto es el valor con dto?

*/

let valorJuego = 50;
let descuento = valorJuego * 0.2;

let precioFinal = valorJuego - descuento;

console.log(
  `El juego FIFA 24 cuesta ${valorJuego} euros, me dan un dto del 20%, el juego me costo en total ${precioFinal} euros, el descuento fue del ${descuento}%`
);
