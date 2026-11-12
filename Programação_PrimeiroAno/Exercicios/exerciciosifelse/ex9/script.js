let saldoMedio = parseFloat(prompt("Qual o seu Saldo Médio?"));
let saldoCredito;

if (saldoMedio <= 500) {
    saldoCredito = 0
    alert("Nenhum crédito");
} else if (saldoMedio <= 1000) {
    saldoCredito = saldoMedio * 0.30
    alert(`Seu crédito é de R$${saldoCredito}`);
} else {
    alert(`seu credito é de R$${(saldoCredito = saldoMedio * 0.50).toFixed(2)}`);
}