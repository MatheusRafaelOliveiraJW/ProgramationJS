// Uma  academia  deseja  calcular  a  altura  média  dos  novos  alunos 
// matriculados.
// Desenvolva  um  programa  em  JavaScript  que  leia  a  quantidade  de 
// alunos.
// Utilizando a estrutura do...while, solicite a altura de cada aluno (em 
// metros).
// Ao final, apresente:
// ●soma das alturas; 
// ●altura média da turma.
let quantidade;
let contador = 1;
let altura;
let soma = 0;
let media;

quantidade = Number(prompt("Digite a quantidade de alunos:"));

do {
    altura = Number(prompt("Digite a altura do aluno " + contador + ":"));

    soma += altura;
    contador++;
} while (contador <= quantidade);

media = soma / quantidade;

console.log("Soma das alturas: " + soma + " metros");
console.log("Altura média da turma: " + media + " metros");