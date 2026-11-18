function verificarAprovacao(media) { 
    // Use if / else if / else e retorne a situação 
    if (media >= 7) {
        alert(`Aprovado`);
    } else if (media >= 5) {
        alert(`recuperação`);
    } else {
        alert(`reprovado`);
    }

}  
console.log(verificarAprovacao(8.5)); 
console.log(verificarAprovacao(6)); 
console.log(verificarAprovacao(4));