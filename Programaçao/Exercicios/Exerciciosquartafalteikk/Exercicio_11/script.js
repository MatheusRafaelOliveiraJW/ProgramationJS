// Dados
let gados = parseFloat (prompt("Quantas cabeças de gado voce tem?"));
let herdeiros = parseFloat (prompt("Quantos herdeiros tem pra essas cabeças?"));
let heranca = gados / herdeiros;
let percentual = 15
let caridade = gados * (percentual / 100); //certo


alert (`Cada herdeiro recebera ${heranca} gados.`);
alert (`O fazendeiro deixou antes de falecer 15% de seus gados para caridade,isto é ${caridade}`);
alert (`O restante de seus gados são: `)