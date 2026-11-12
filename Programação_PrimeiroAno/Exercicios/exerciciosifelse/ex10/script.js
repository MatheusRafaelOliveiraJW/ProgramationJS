let salario = parseFloat(prompt("qual o seu salário?"));
let imposto;

if (salario <= 2500) {
    alert(`Você não precisa pagar imposto de renda.`);
} else if (salario <= 5000) {
    imposto = salario * 0.15
    alert(`Você tem que pagar R$${(imposto).toFixed(2)}`);
} else {
    imposto = salario * 0.27
    alert(`Você tem que pagar R$${(imposto).toFixed(2)}`)
}