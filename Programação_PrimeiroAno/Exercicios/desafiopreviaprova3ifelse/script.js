// Entrada

let areaTotalPintada = parseFloat(prompt("Qual a area total a ser pintada?(em metros)"));
let rendimento = parseFloat(prompt("Qual o rendimento da tinta?(em metros quadrados por litro)"));
let volumetria = parseFloat(prompt("Qual a volumetria da lata de tinta?(em litros)"));
let precoUnitarioLata = parseFloat(prompt("qual o preço unitario da lata de tinta?"));
let quanHorasEstimadasServico = parseFloat(prompt("Quantas horas estimadas para a execução do serviço?"));
let qtdPintores = parseInt(prompt("Quantidade de pintores alocados na equipe?"));
let horaCobradaPintor = parseFloat(prompt("Valor da hora cobrado por pintor?"));
let valorReservado = parseFloat (prompt("Valor reservado?(orçamento máximo disponível pela família)"));

// Parceiro processamento

// (A) Calculo de material

let litragemTinta = areaTotalPintada / rendimento;
let latas = Math.ceil(litragemTinta / volumetria);
let custoTotalTinta = litragemTinta * precoUnitarioLata;

// (B)

let custoEquipePintura = (quanHorasEstimadasServico * qtdPintores) * horaCobradaPintor;

// C

let totalCusto = custoEquipePintura + custoTotalTinta;

if (totalCusto >= (valorReservado * 1.5)) {
    (totalCusto * 0.5);
    

}
