let precos = [23, 46, 84, 10, 5, 9];

function calcularMedia(valores) {
    let soma = 0;

    valores.forEach(function(preco) {
        soma = soma + preco;
    });

    return soma / valores.length;
}

let media = calcularMedia(precos);
console.log(media.toFixed(2));