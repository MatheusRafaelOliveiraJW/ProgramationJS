let tipoDoCliente = prompt("qual a cateforia do cliente? (A B ou C)?");
let valorCompra = parseFloat("Qual foi o valor da compra?");

switch (tipoDoCliente) {
    case "A":
        valorCompra = valorCompra * 0.05
        alert(`Sua categoria é premium, e seu valor da compra com um desconto de 5% é ${valorCompra}`);
        break;
        
    case "B":
        valorCompra = valorCompra * 0.10
        alert(`Sua categoria é Ouro, seu valor da compra junto com o desconto de 10% é ${valorCompra}`);
        break;

    case "C":
        valorCompra = valorCompra * 0.15
        alert(`sua categoria e diamante, e o valor da compra com o desconto é de 15%: ${valorCompra}`);
        break;

    default:
        alert("Invalido");
        break;
}