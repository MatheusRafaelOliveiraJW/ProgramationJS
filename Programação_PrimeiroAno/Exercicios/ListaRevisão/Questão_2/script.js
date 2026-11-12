// Entrada
let horasUtilizadas = parseFloat(prompt("Quantas horas foram utilizadas?"));
let valorHora = parseFloat(prompt("Qual é o valor por hora?"));
let bruto = horasUtilizadas * valorHora;
let desconto_8 = valorHora * 0.92;
let desconto_15 = valorHora * 0.85;


if (horasUtilizadas <= 100) {
    desconto = 0;
} else if (horasUtilizadas <= 250) {
    desconto = desconto_8;
} else {
    desconto = desconto_15;
}

let total = bruto - desconto;

alert("Valor bruto:R$ " + bruto.toFixed(2));
alert("desconto :R$ " + desconto.toFixed(2));
alert("Total :R$ " + total.toFixed(2));