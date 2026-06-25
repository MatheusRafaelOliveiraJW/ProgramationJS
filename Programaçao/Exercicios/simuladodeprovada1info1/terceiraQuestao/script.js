let diasDeUsoMensal = prompt("qual o numero de dias de uso no mes?");
let horasUsoPorDia = prompt("qual as horas de uso por dia?");
let consumoEquipamento = parseFloat (prompt("qual o consumo do equipamento em kWh por hora?"));
let custokwh = parseFloat (prompt("qual o custo do kWh?"));
let taxaFixaMensalManutencao = parseFloat (prompt("qual a taxa fixa mensal de manutençao?"));

let totalHorasUso = horasUsoPorDia * diasDeUsoMensal;
let consumoTotalEnergia = custokwh * totalHorasUso;
let custoComEnergia 