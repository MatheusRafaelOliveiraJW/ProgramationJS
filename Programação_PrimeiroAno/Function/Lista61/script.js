
let nota1 = parseInt(prompt("Insira sua primeira nota"));
let nota2 = parseInt(prompt("Insira a segunda"));
let soma = 0;

function calcularMedia(nota1, nota2) { 
    // Calcule e retorne a média das duas notas 
    soma = soma + nota1 + nota2;

    return soma/2; 

}  
let media = calcularMedia(nota1, nota2); 
console.log("Média:", media);