let numPaginas = prompt("qual o numero de paginas do material?");
let copias = prompt("quantidade de copias?");
let custopPagina = prompt("e qual o custo por paginas?");
let taxaAdicional = prompt("e o percentual de taxa adicional?");



let totaldePaginas = numPaginas * copias;
let custoBase = custopPagina * totaldePaginas;
let valorDaTaxa = custoBase * (taxaAdicional / 100);



alert (`o total de paginas será de: ${totaldePaginas}`);
alert (`o custo base será de: ${custoBase}`);
alert (`o valor da taxa será de:${valorDaTaxa}`);


// valorFinal = valorBase * (taxa / 100)