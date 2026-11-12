// Entradas

let nome;
let material;
let bonificacao = 1200;
let saldoFinal;
let continuar;

let contador = 0;
let somador = 0;
let media;
let percentual;

let eficientes = 0;

do {
    nome = prompt("Qual nome?");

    // Validação do desperdício
    do {
        material = +prompt("Quanto de material foi desperdiçado?");

        if (material < 0 || material >= 60) {
            alert("Quantidade inválida!");
        }

    } while (material < 0 || material >= 60);


    // Calcula o bônus líquido
    if (material <= 10) {

        saldoFinal = bonificacao - (material * 15);

        eficientes++;

        alert(`Você está na faixa eficiente.
Bônus líquido: R$ ${saldoFinal.toFixed(2)}`);

    } else if (material <= 25) {

        saldoFinal = bonificacao - (material * 25);

        alert(`Você está na faixa de alerta.
Bônus líquido: R$ ${saldoFinal.toFixed(2)}`);

    } else {

        saldoFinal = bonificacao - (material * 40) - 200;

        alert(`Você está na faixa crítica.
Bônus líquido: R$ ${saldoFinal.toFixed(2)}`);
    }


    // Contadores e acumulador
    somador += saldoFinal;
    contador++;


    // Validação de s ou n
    do {
        continuar = prompt("Deseja continuar? Digite s ou n").toLowerCase();

        if (continuar != "s" && continuar != "n") {
            alert("Digite apenas s ou n!");
        }

    } while (continuar != "s" && continuar != "n");


} while (continuar == "s");


// Resultados finais

media = somador / contador;
percentual = (eficientes / contador) * 100;

alert(`O bônus líquido final de ${nome} foi de R$ ${saldoFinal.toFixed(2)}`);

alert(`A média de bônus líquido de todos os operadores foi de R$ ${media.toFixed(2)}`);

alert(`O percentual dos operadores que ficaram na faixa eficiente foi de ${percentual.toFixed(2)}%.`);