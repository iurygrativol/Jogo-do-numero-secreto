let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 500');

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(chute == numeroSecreto);

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', 'Você descobriu o número secreto!');
  } else {
    if (cute > numeroSecreto) {
     exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
     exibirTextoNaTela('p', 'O número secreto é maior');
    }
  }
}
  
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
