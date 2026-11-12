let regiao = prompt("as siglas pra cade regiao sao: S N SE CO NE");
let valorFrete;

switch (regiao) {
    case "S":
        valorFrete = 20
        alert("A sua região e sul e o frete R$20");
        break;

    case "N":
        valorFrete = 45
        alert("a sua regiao e norte e o frete e 45");
        break;

    case "SE":
        valorFrete = 25
        alert("a sua regiao e sudeste e o frete e de 25");
        break;

    case "CO":
        valorFrete = 35
        alert("a regiao é centro oeste e frete de 35");
        break;

    case "NE":
        valorFrete = 40
        alert("sua regiao e nordeste e o frete e 40");
        break;

    default:
        alert("codigo errado");
        break;
}