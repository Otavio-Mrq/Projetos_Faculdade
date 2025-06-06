// Elementos do DOM
const alvo = document.getElementById('ponto');
const pontuacao = document.getElementById('pontuacao');
const tempoLimite = document.getElementById('tempo');
const areaJogo = document.getElementById('fundo');
const btnIniciar = document.getElementById('iniciar');
const btnDificuldade = document.getElementById('dificuldade');
const mensagem = document.getElementById('mensagem');

// Variáveis do jogo
let contador = 0;
let contadorTempo = 30;
let intervaloJogo;
let nivelDificuldade = 'normal'; // fácil, normal, difícil
let jogoAtivo = false;

// Configurações de dificuldade
const configuracoesDificuldade = {
  'facil': { tempo: 45, tamanho: 70, velocidade: 1500 },
  'normal': { tempo: 30, tamanho: 50, velocidade: 1000 },
  'dificil': { tempo: 15, tamanho: 30, velocidade: 700 }
};

// Inicialização
function init() {
  btnIniciar.addEventListener('click', iniciarJogo);
  btnDificuldade.addEventListener('click', alternarDificuldade);
  atualizarInterfaceDificuldade();
}

// Alternar dificuldade
function alternarDificuldade() {
  if (nivelDificuldade === 'facil') nivelDificuldade = 'normal';
  else if (nivelDificuldade === 'normal') nivelDificuldade = 'dificil';
  else nivelDificuldade = 'facil';
  
  atualizarInterfaceDificuldade();
}

function atualizarInterfaceDificuldade() {
  const config = configuracoesDificuldade[nivelDificuldade];
  btnDificuldade.textContent = `Dificuldade: ${nivelDificuldade.charAt(0).toUpperCase() + nivelDificuldade.slice(1)}`;
  contadorTempo = config.tempo;
  tempoLimite.textContent = `Tempo: ${contadorTempo}s`;
}

function alocarAlvo() {
  if (!jogoAtivo) return;
  
  const config = configuracoesDificuldade[nivelDificuldade];
  
  alvo.style.width = `${config.tamanho}px`;
  alvo.style.height = `${config.tamanho}px`;
  
  const areaWidth = areaJogo.clientWidth;
  const areaHeight = areaJogo.clientHeight;
  const maxX = areaWidth - config.tamanho;
  const maxY = areaHeight - config.tamanho;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  alvo.style.left = `${randomX}px`;
  alvo.style.top = `${randomY}px`;
  alvo.style.display = 'block';
}

function contarPontos() {
  contador++;
  pontuacao.textContent = `Pontos: ${contador}`;
  alocarAlvo();
}

function limitarTempo(tempo) {
  tempoLimite.textContent = `Tempo: ${tempo}s`;
  
  if (tempo > 0) {
    intervaloJogo = setTimeout(() => {
      limitarTempo(tempo - 1);
    }, 1000);
  } else {
    tempoEsgotado();
  }
}

function tempoEsgotado() {
  jogoAtivo = false;
  alvo.style.display = 'none';
  clearTimeout(intervaloJogo);
  
  mensagem.innerHTML = `
    <h2>Fim de Jogo!</h2>
    <p>Sua pontuação: ${contador} pontos</p>
    <button onclick="reiniciarJogo()">Jogar Novamente</button>
  `;
  mensagem.style.display = 'block';
}

function iniciarJogo() {
  contador = 0;
  pontuacao.textContent = `Pontos: ${contador}`;
  mensagem.style.display = 'none';
  jogoAtivo = true;
  
  const config = configuracoesDificuldade[nivelDificuldade];
  contadorTempo = config.tempo;
  tempoLimite.textContent = `Tempo: ${contadorTempo}s`;
  
  limitarTempo(contadorTempo);
  alocarAlvo();
  
  alvo.onclick = contarPontos;
}

function reiniciarJogo() {
  iniciarJogo();
}

init();

window.reiniciarJogo = reiniciarJogo;