// Uma loja deseja calcular o faturamento diário.
// ●Desenvolva  um  programa  em  JavaScript  que  leia  a  quantidade  de 
// vendas realizadas durante o dia.
// ●Utilizando a estrutura do...while, solicite o valor de cada venda.
// Ao final, apresente:
// ●valor total arrecadado; 
// ●valor médio das vendas.

let dias = parseInt(prompt("Quantos dias voce quer a media?"));
let qntVendas = parseInt(prompt("Qual foi a quantidade de vendas do dia: "));
let contador = 1;
let soma = 0;
let valorTotal;

do {
    console.log(contador)
    soma += contador;
    contador++
    valorTotal = contador
} while (contador <= qntVendas)
 alert("O valor total:" + contador);
 
let valorMedio = (valorTotal / qntVendas);
alert ("o valor medio é:" + valorMedio);
