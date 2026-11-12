let bebida = parseInt(prompt("Escolha uma bebida pelos codigos: 1 para Agua , 2 para Refrigerante , 3 para Suco."));

switch (bebida) {
    case 1:
        alert("Bebida escolhida:Agua , aguarde...");
        break;

    case 2:
        alert("Bebida escolhida: Refrigerante , aguarde...");
        break;

    case 3:
        alert("Bebida escolhida: Suco , aguarde...");

    default:
        alert("Código de bebida invalido");
}

// Correto!