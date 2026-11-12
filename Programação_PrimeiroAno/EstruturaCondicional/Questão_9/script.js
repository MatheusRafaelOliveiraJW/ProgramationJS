// entrada

let code = prompt("Digite C para carro, M para moto e B para Bicicleta").toUpperCase();

switch (code) {
    case "C":
        alert("Seu transporte é carro");
        break;

    case "M":
        alert("Seu transporte é moto");
        break;

    case "B":
        alert("seu meio de transporte é bicicleta");
        break;
    default:
        alert("invalido");
        break;
}

// correto