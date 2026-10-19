document.addEventListener('DOMContentLoaded', () => {
  const cartoes = document.querySelectorAll('.cartao');
  const pontos = document.querySelectorAll('.ponto');
  const btnAnterior = document.querySelector('.nav-anterior');
  const btnProximo = document.querySelector('.nav-proximo');
  
  let indexAtual = 0;
  const totalSlides = cartoes.length;
  
  const tempoIntervalo = 10000; 
  let temporizadorAnimacao;

  function irParaSlide(index) {

    cartoes[indexAtual].classList.remove('ativo');
    pontos[indexAtual].classList.remove('ativo');
    
    indexAtual = (index + totalSlides) % totalSlides;
    
    cartoes[indexAtual].classList.add('ativo');
    pontos[indexAtual].classList.add('ativo');
  }

  function proximoSlideAutom() {
    irParaSlide(indexAtual + 1);
  }

  function cliqueManual(index) {
    irParaSlide(index);
    reiniciarTemporizador();
  }

  pontos.forEach((ponto, index) => {
    ponto.addEventListener('click', () => cliqueManual(index));
  });

  function reiniciarTemporizador() {
    clearInterval(temporizadorAnimacao);
    temporizadorAnimacao = setInterval(proximoSlideAutom, tempoIntervalo);
  }

  reiniciarTemporizador();
});