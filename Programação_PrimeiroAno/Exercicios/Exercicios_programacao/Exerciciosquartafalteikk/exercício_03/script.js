let valorKg = parseFloat (prompt(`Qual o valor do quilograma?`));
console.log(valorKg);
let qtdConsumida = parseFloat (prompt(`Quantos quilogramas do produto foram consumidos?`));
console.log(qtdConsumida);
let valFinal = qtdConsumida * valorKg;
console.log(valorKg);
alert(`O valor a ser pago pelo cliente é ${valFinal.toFixed(2)}`);