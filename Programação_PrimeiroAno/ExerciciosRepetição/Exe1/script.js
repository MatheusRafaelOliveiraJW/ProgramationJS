let peso;
let multa;
let excesso = peso - 50;

do {
    peso = prompt("Qual o peso?");

    if (peso < 0 || peso > 150) {
        alert("Valor inválido!");
    }
} while (peso < 0 || peso > 150) {
    multa = excesso * 8;
    
    if (peso > 50) {
        alert(`Sua multa será de: R$${multa}.`);
    } else {
        alert("Dentro do regulamento! :D");
    }
}