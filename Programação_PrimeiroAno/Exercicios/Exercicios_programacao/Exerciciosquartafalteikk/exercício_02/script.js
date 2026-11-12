let valorPago = parseFloat (prompt(`Quantos reais foram pagos`));
console.log(valorPago);
let preçoProduto = parseFloat (prompt(`Qual o preço do produto?`));
console.log(preçoProduto);
let trocoCliente = valorPago - preçoProduto;
console.log(trocoCliente);
alert(`O troco que deve ser dado ao cliente é ${trocoCliente.toFixed(2)}`);