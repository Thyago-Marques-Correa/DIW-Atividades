const operacao = prompt("Escolha a operação: +, -, * ou /");

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

let resultado;

switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    resultado = numero1 / numero2;
    break;
  default:
    alert("Operação inválida. Escolha entre soma, subtração, multiplicação ou divisão.");
}

if (resultado !== undefined) {
  alert(`Resultado: ${resultado.toFixed(2)}`);
}
