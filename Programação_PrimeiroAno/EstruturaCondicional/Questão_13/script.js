let codigo = parseInt(prompt("1 para Norte, 2 pra Nordeste, 3 pra centro-oeste, 4 pra sudeste, 5 pra sul"));

switch (codigo) {
    case 1:
        alert("Sua regiao é norte");
        break;

    case 2:
        alert("Sua regiao é nordeste");
        break;

    case 3:
        alert("sua regiao é centro-oeste");
        break;

    case 4:
        alert("sua regiao é sudeste");
        break;
        
    case 5:
        alert("sua regiao e sul");
        break;

    default:
        alert("codigo de origem inválido");
}