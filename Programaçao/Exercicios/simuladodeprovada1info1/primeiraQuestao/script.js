let baseTerreno = parseFloat (prompt("Qual a base do terreno em metros?"));
let alturaTerreno = parseFloat (prompt("Qual a altura do terreno em metros?"));
let precoQuadrado = parseFloat(prompt("e o preço em metro quadrado?"));
// Eu errei de nao colocar os parseFloat,já corrigido.

let areaTerreno = (baseTerreno * alturaTerreno)/2;
let valorTotal = precoQuadrado * areaTerreno;

alert (`a area do terreno da sua sogra é:${areaTerreno}.`);
alert (`o valor total do seu terreno será: ${valorTotal}`);