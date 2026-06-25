// Quantos tijolos iguais sao necessarios pra construir uma parede?
let dimensaoAltura = parseFloat (prompt("Qual é a altura do seu tijolo em metros?"));
let dimensaoLargura = parseFloat (prompt("Qual é a largura em metros?"));
let paredeAltura = parseFloat (prompt("Agora Qual é a altura da PAREDE?(Em metros)"));
let paredeLargura = parseFloat (prompt("E a largura da parede?"));
let percentual = 3
let reservados = (percentual / 100);
let rejunte = (paredeAltura + paredeLargura)/reservados;

alert (``)