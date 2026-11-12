let periodo = prompt("Que periodo do dia esta?(M para manha,T para tarde,N para noite)");

switch (periodo) {
    case "M":
        alert("Bom dia");
        break;

    case "T":
        alert("Boa tarde");
        break;

    case "N":
        alert("Boa noite");
        break;

    default:
        alert("periodo inválido!");
} 
