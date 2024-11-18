/* 
Ejercicio 4

Tenemos una Jirafa en el zoo que pesa 1.120 kilos,
y le damos de comer 141 kilos de hojas frescas, 

Cuanto pesa ahora la Jirafa?

*/

let unaJirafa = 1120;
let comidaJirafa = 141;

let pesoJirafa = unaJirafa + comidaJirafa;

let resultado =
    "Despues de comer " +
    comidaJirafa +
    " kilos de hojas frescas" +
    " la Jirafa ahora pesa " +
    pesoJirafa +
    " kilos";
// console.log(resultado);

// Resolver con Template Strigns
resultado = `Despues de comer ${comidaJirafa} kilos de hojas frescas la Jirafa ahora pesa ${pesoJirafa} kilos`;
console.log(resultado);

// console.log('Despues de comer ' + comidaJirafa + ' kilos de hojas frescas' + ' la Jirafa ahora pesa ' + pesoJirafa + ' kilos');
