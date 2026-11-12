let primeiroNumero = parseFloat (prompt("Escolha um primeiro número"));
let segundoNumero = parseFloat (prompt("Escolha um segundo"));
let operacao = parseFloat (prompt("escolha agora uma operaçao (soma,subtração,Multiplicaçao,Divisão)"));
let operacion;

switch (operacion) {
    case "+":
        operacion = primeiroNumero + segundoNumero
        alert(`O resultado é: ${operacion}`);
        break;

    case "-":
        operacion = primeiroNumero - segundoNumero
        alert(`O resultado é: ${operacion}`);
        break;

    case "*":
        operacion = primeiroNumero * segundoNumero
        alert(`O resultado é: ${operacion}`);
        break;

    case "/":
        operacion = primeiroNumero / segundoNumero
        alert(`o resultado é ${operacion}`);
        break;

    default:
        alert("Cara.");
}