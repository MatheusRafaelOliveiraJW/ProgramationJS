let notas = [6, 8, 2, 9, 5, 2, 7, 1];

function contarAprovados(valores) {
    let quantidade = 0;

    valores.forEach(function(nota) {
        if (nota >= 7) {
            quantidade++;
        }
    });

    return quantidade;
}

console.log(contarAprovados(notas));