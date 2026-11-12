let numeroHoraPrevistas = parseFloat(prompt("qual o numero de horas previstas?"));
let ValorHora = parseFloat(prompt("qual é o valor da hora?"));
let percentualComplex = parseInt(prompt("Qual é o percentual de complexidade?(10,20 ou 30%)"));

let custoBase = numeroHoraPrevistas * valorHora;
let acrescimo = custoBase * percentualComplex;
let valorFinal = custoBase * acrescimo;
let mensagem;

if (valorFinal < 8000) {
    mensagem = "Plano basico"
} else if (valorFinal < 20000) {
    mensagem = "Plano Médio"
} else {
    mensagem = "Plano Grande"
}

alert(`${mensagem}`);