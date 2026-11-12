// Uma escola deseja calcular a média da turma. Desenvolva um programa que 
// leia a quantidade de alunos e, utilizando a estrutura do...while, solicite a 
// nota de cada aluno.
// ●Ao final, exiba: soma das notas; média da turma

let qntAlunos = prompt("Quantidade de Alunos:");

let contador = 1;
let soma = 0;

do {
    nota = parseInt (prompt("Digite a nota do aluno: " + contador ));
    soma += contador; 
    contador++
} while (contador <= qntAlunos);
    alert("soma = " + soma);