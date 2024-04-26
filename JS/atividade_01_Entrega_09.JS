const notas = [];

for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    
    while (isNaN(nota)) {
        alert("Por favor, digite apenas números para as notas.");
        nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    }

    notas.push(nota);
}

const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
alert(`A média das notas é: ${media.toFixed(2)}`);
