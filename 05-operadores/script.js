// Operadores Aritméticos o matematicos binarios = Suma + Resta - Multi * Divi / Modulo o resto %
// Operadores Aritméticos unarios son: Operador incremento: ++ y el Operador decremento: --
console.log("//--- Operadores Aritmeticos o matematicos ---//");
let numero1 = 12;
let numero2 = 44;

let suma = numero1 + numero2;
console.log(suma);
console.log("Suma: " + suma); // Concatenacion

let resta = numero1 - numero2;
console.log(resta);
console.log("Resta: " + resta); // Concatenacion

let multi = numero1 * numero2;
console.log(multi);
console.log("Multiplicacion: " + multi); // Concatenacion

let divi = numero1 / numero2;
console.log(divi);
console.log("Division: " + divi); // Concatenacion

let modulo = numero1 % numero2;
console.log(modulo);
console.log("Resto: " + modulo); // Concatenacion

let potencia = numero1 ** 2;
console.log(potencia);
console.log("Potencia: " + potencia); // Concatenacion

let NoSe = numero1 ^ 2;
console.log(NoSe); // No recuerdo como se llama o que hace

console.log("//--- Operadores de Asignacion ---//");
// Operadores de Asignacion
let number = 17;

// number = 17 + 3;
// console.log(number); // Da 20
number += 3;
console.log(number);
number -= 3;
console.log(number);
number *= 3;
console.log(number);
number /= 3;
console.log(number);

console.log("//--- Operadores de Comparacion ---//");

// Operadores de comparacion: Permiten comparar 2 valores que regresan un booleano
let numeroC = 31;

/* console.log(numeroC == 31); // Da true
console.log(numeroC == 33); // da false
console.log(numeroC == "31"); // da true - Porque JS no es estricto, no importa el tipo de dato en este caso un "string"
console.log(numeroC === "31"); // da false - el === es estricto */

// != Desigualdad (No es igual) compara si dos valores no son iguales, sin tener en cuenta el tipo de dato.
console.log(numeroC != "31"); // da false - 31 y 31 Son iguales por eso es falso
console.log(numeroC != "33"); // da true - 31 y 33 NO son iguales por eso es verdad

// !== Desigualdad Estricta Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.
console.log(numeroC !== "31"); // da true - 31 y "31" Son iguales y diferente tipo, da verdad
console.log(numeroC !== 33); // da true - 31 y 33 NO son iguales y del mismo tipo, da verdad
console.log(numeroC !== "31"); // da true - 31 y "31" NO son iguales y diferente tipo, da verdad

console.log(numeroC > 5); // Da true, 31 es mayor a 5
console.log(numeroC > 55); // Da false, 31 NO es mayor a 55
console.log(numeroC >= 31); // Da true, 31 es igual a 31

console.log(numeroC < 5); // Da false, 5 es menor a 31
console.log(numeroC < 55); // Da true, 31 es menor a 31
console.log(numeroC <= 31); // Da true, 31 es igual a 31

console.log("//--- Operadores Logicos ---//");
// Operadores Logicos: Son utilizados para combinar o invertir expresiones booleanas. Estos operadores son fundamentales para la toma de decisiones en el código, permitiendo evaluar múltiples condiciones y controlar el flujo de ejecución en un programa.
// Los operadores lógicos son herramientas que permiten realizar pruebas en expresiones lógicas, proporcionando un resultado que puede ser verdadero o falso, dependiendo de si se cumplen ciertas condiciones.

//AND && - El operador lógico AND Devuelve true si ambas expresiones son verdaderas. Si alguna de las expresiones es falsa, el resultado será false.
let esMayorDeEdad = true;
let tieneEntrada = true;

console.log(esMayorDeEdad && tieneEntrada); // Da true, las 2 variables son verdaderas

// OR (||) El operador lógico OR devuelve true si al menos una de las expresiones es verdadera. Solo devolverá false si ambas expresiones son falsas.
let a = true;
let b = false;
console.log(a || b); // Regresa true, las 2 variables son verdaderas

let c = false;
let d = false;
console.log(c || d); // Regresa false, las 2 son falsas

// NOT (!) El operador lógico NOT invierte el valor de una expresión booleana. Si la expresión es true, el resultado será false, y viceversa.
console.log(!a); // Regresa false
console.log(!b); // Regresa true

console.log("//--- Operadores Cadena ---//");
// Cadena: se refieren a los operadores que se utilizan para manipular y trabajar con cadenas de texto (strings). Los más comunes son:

console.log("//--- Cadena -  Concatenación ---//");
// Concatenación - El operador + se utiliza para concatenar (unir) dos o más cadenas.
let saludo = "Hola, ";
let nombre = "Juan";

console.log(saludo + nombre);

let mensaje1 = "Hola,";
let mensaje2 = "que tal";

let mensajeTotal = mensaje1 + " " + mensaje2;

console.log("//--- Cadena -  Concatenación + += ---//");
// Concatenación con +=:
mensajeTotal += " Soy Fredy Frasser"; // Adiciono algo mas al mensaje que ya estaba guardado en memoria

console.log(mensajeTotal);

console.log("//--- Plantillas literales `` ---//");
// Plantillas literales (Template literals): Aunque no son un operador en el sentido tradicional, las plantillas literales permiten incluir expresiones dentro de cadenas utilizando la sintaxis de comillas invertidas (``).
let nombre1 = "Juan";
let mensaje = `Hola, ${nombre}`; // "Hola, Juan"

console.log(mensaje);

console.log("//--- Métodos de cadena ---//");
// Métodos de cadena: Aunque no son operadores, es importante mencionar que JavaScript proporciona una variedad de métodos para trabajar con cadenas, como length, toUpperCase(), toLowerCase(), substring(), indexOf(), entre otros.
let texto = "Hola Mundo";
console.log(texto.length); // 10
console.log(texto.toUpperCase()); // "HOLA MUNDO"
console.log(texto.substring(0, 4)); // "Hola" - El substring() método devuelve un subconjunto de un objeto String.

console.log("//--- Operadores de Incremento y Decremento ---//");
// Operadores de Incremento y Decremento: Son utilizados para aumentar o disminuir el valor de una variable numérica en uno. Estos operadores son muy útiles para realizar operaciones en bucles y otras estructuras de control.

let cifra = 1200;

// cifra = 1200 + 1; no lo quiero asi
// cifra = cifra + 1; no lo quiero asi

cifra++; // Devuelve 1201
cifra++; // Devuelve 1202
cifra++; // Devuelve 1203 etc...

cifra--; // Devuelve 1202

console.log(cifra);

// Post-incremento: Se coloca después de la variable. Devuelve el valor actual de la variable y luego aumenta su valor en 1.
