let curso = parseInt (prompt("Qual seu curso?1 pra info 2 pra adm e 3 pra rede de computadores"));

switch (curso) {
    case 1:
        alert("Seu curso é informatica");
        break;

    case 2:
        alert("Seu curso é adiministração");
        break;

    case 3:
        alert("Seu curso é rede de computadores");
        break;

    default:
        alert("Inválido");
        break;
}

// Correto