let idade = parseInt(prompt("Qual sua idade?"));
let categoria;

if (idade <= 12) {
    categoria = "Infantil";
} else if (idade <= 17) {
    categoria = "Juvenil";
} else {
    categoria = "Adulto";
}

alert(`sua categoria é ${categoria}`);