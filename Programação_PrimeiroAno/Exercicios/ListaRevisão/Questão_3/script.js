let qntTarefasFeitas = parseInt(prompt("Qual a quantidade de tarefas concluidas do programador?"));
let qntBugsEncontrados = parseInt(prompt("Quantos bugs foram encontrados pelo programador?"));
let notaAvaliacao = parseFloat(prompt("Qual sua nota na avaliaçao(1 a 10)?"));
let indice = (tarefas * 2) + (nota * 10) - (bugs * 5);
mensagem;

if (indice < 50) {
    mensagem = "Desempenho Insatisfatório"
} else if (indice <= 99) {
    mensagem = "Desempenho Bom"
} else {
    mensagem = "Desempenho Excelente"
}

alert(`${mensagem}`);