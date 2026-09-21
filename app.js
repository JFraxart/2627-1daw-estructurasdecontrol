console.log("----------------------");
console.log("ESTRUCTURAS DE CONTROL");
console.log("----------------------");

// Estrucutra de contral secuencial

// Comentario de una línea

/*
    Comentario
    de varias
    líneas 
*/

console.log("-------------");
console.log("1- SECUENCIAL");
console.log("-------------");

const PI = 3.1416; // Las constantes suelen escribirse en MAYÚSCULAS

let edad = 18; // Las variables pueden cambiar el valor
let nombre = "Manolo";
var num = 15; //Obsoleto

console.log("Hola " + nombre + " tienes " + edad + " años.");

console.log("--------------------------");
console.log("2- CONDICIONAL / SELECTIVA");
console.log("--------------------------");

edad = 17

// SIMPLE
if(edad >= 18){
    console.log('Eres mayor de edad.')
}

// DOBLE CONDICIÓN
if(edad >= 18){
    /* Los corchetes/llaves definen el ámbito, que es el código que se va a ejecutar dentro */
    console.log('Eres mayor de edad.')
}else{
    console.log('No eres mayor de edad.')
}

// MÚLTIPLE (Opción 1)
edad = 7

if(edad <= 6){
    console.log("Vas a Infantil")
}else if(edad <= 9){
    console.log("Vas a Primaria")
}else{
    console.log("Vas a Secundaria")
}

// MÚLTIPLE (Opción 2)
switch(edad){
    case 6:
        console.log("Vas a Infantil")
        break
    case 10:
        console.log("Vas a Primaria")
        break
    default:
        console.log("Vas a Secundaria")
}

console.log("-------------------------");
console.log("3- ITERATIVA / REPETITIVA");
console.log("-------------------------");

// BUCLE FOR  condición inicial; condición de salida; incremento de uno en uno
for(let i = 0; i <= 10; i++){
    console.log(i + "- Hola")
}

// BUCLE WHILE condición inicial; 
let i = 0
while(i < 10){
    console.log(i + ". Hola")
    // Incremento para evitar bucle infinito
    i++
}