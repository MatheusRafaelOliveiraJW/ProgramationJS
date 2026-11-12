// Desenvolva um programa em JavaScript que solicite ao usuário a opção da figura geométrica e
// utilize a estrutura switch para realizar o cálculo da área correspondente.
// De acordo com a opção escolhida:
// • Quadrado: solicite o valor do lado e calcule a área utilizando a fórmula:
// Area=lado×lado
// • Retângulo: solicite a base e a altura e calcule a área utilizando a fórmula:
// Area=base×altura
// • Círculo: solicite o valor do raio e calcule a área utilizando a fórmula:
// Area=π×raio2
// Utilize 3,14 para o valor de π.
// Caso o usuário informe uma opção diferente de 1, 2 ou 3, o programa deverá exibir a mensagem:
// "Opção inválida."
// Menu de opções:
// Opção Figura
// 1
// Quadrado
// 2
// Retângulo
// 3
// Círculo

let forma = parseInt (prompt("Qual figura você deseja?(1 Quadrado, 2 Retangulo, 3 círculo.)"));
let lado;
let base;
let altura;
let raio;

switch (forma) {
    case 1:
        lado = parseInt (prompt("Selecione a area do LADO do quadrado"));
        area = lado * lado
        alert(`A area do seu quadrado é de: ${area}`);
        break;

    case 2:
        base = parseInt (prompt("qual a base do seu retangulo?"));
        altura = parseInt (prompt("qual a altura do retangulo?"));
        area = base * altura
        alert(`a area do seu retangulo é de: ${area}`);
        break;

    case 3:
        raio = parseInt (prompt("Qual ira ser o raio do seu Círculo?"));
        raio2 = raio **2
        area = 3.14 * raio2
        alert(`o raio do seu circulo é de: ${area}`);
        break;

    default:
        alert("Inválido!");
        break;
}

// correto