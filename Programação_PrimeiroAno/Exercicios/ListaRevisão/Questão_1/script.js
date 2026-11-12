// Entrada
let gbContratado = parseFloat(prompt("Qual é o espaço total contratado (GB)?"));
let espacogbAtual = parseFloat(prompt("Qual é o espaço atualmente utilizado (GB)?"));

let contratado_50 = gbContratado * 0.50;
let contratado_80 = gbContratado * 0.80;

if (espacogbAtual <= contratado_50) {
    alert(`Uso normal.`);
} else if (espacogbAtual > contratado_50 && espacogbAtual <= contratado_80) {
    alert(`Atenção: armazenamento se aproximando do limite`);
} else {
    alert(`Espaço crítico. Considere ampliar o plano.`)
}