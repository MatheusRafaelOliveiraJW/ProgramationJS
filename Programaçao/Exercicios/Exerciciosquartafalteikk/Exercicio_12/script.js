// dados
let tempo = parseFloat (prompt("Qual foi o tempo gasto da corrida em horas?"));
let velocidadeMedia = parseFloat (prompt("Qual foi a velocidade media durante a viagem em km/h?"));
let consumoMedio = parseFloat (prompt("quantos ele faz por litro?"));
let combustivelPreco = parseFloat (prompt("Qual valor do litro do combustivel?")); 
let distanciaPercorrida = tempo * velocidadeMedia;
let combustivelGasto = combustivel * distanciaPercorrida;
let litros = distanciaPercorrida / consumoMedio;
let custoTotal = litros * combustivelPreco;

alert (`a distancia percorrida na viagem é ${distanciaPercorrida}`);
alert (``)