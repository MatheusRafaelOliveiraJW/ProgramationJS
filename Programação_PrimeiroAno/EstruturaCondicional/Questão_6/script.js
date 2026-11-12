// Código Produto
// Preço
// 100 Mouse
// R$ 50,00
// 200 Teclado
// R$ 80,00
// 300 Monitor R$ 900,00

// Entrada

let produto = parseInt (prompt("Escolha um produto utilizando seu codigo: 100 para mouse, 200 para teclado, 300 pra monitor.")); 

switch(produto) {
    case 100:
        alert("Produto: Mouse R$:50,00");
        break;

    case 200:
        alert("Produto: Teclado R$: 80,00");
        break;

    case 300:
        alert("Produto: monitor, R$: 900,00");
        break;

    default:
        alert("Código não identificado");
        break;
}

// Correto!