// Desenvolva um programa em JavaScript que solicite ao usuário 
// um número inteiro positivo N e calcule a soma de todos os 
// números de 1 até N utilizando a estrutura do...while.

let numero = parseInt(prompt("Escolha um numero inteiro positivo."));
let a = 1;

do {
    console.log(a);
    a++;
} while (a <= numero)