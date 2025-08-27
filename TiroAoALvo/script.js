let alvo = document.getElementById('ponto');
let pontuacao = document.getElementById('pontuacao');
let tempoLimite = document.getElementById('tempo');

let contador = 0;
let contadorTempo;
let intervaloJogo;

let jogoArea = document.querySelector('.area-jogo') || document.body;

function alocarAlvo() {
    alvo.style.width = '50px';
    alvo.style.height = '50px';
    alvo.style.position = 'absolute';
    
    const areaWidth = jogoArea.clientWidth;
    const areaHeight = jogoArea.clientHeight;
    const alvoWidth = alvo.clientWidth;
    const alvoHeight = alvo.clientHeight;
    
    const maxX = areaWidth - alvoWidth;
    const maxY = areaHeight - alvoHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    alvo.style.left = randomX + 'px';
    alvo.style.top = randomY + 'px';
    
    alvo.style.display = 'block';
    
 
    alvo.onclick = function() {
        contarPontos();
        alocarAlvo();
    };
}

function alocarAlvoComAnimacao() {

    alvo.style.transition = 'opacity 0.3s';
    alvo.style.opacity = '0';
    
 
    setTimeout(() => {
        alocarAlvo();

        alvo.style.transition = 'opacity 0.3s';
        alvo.style.opacity = '1';
    }, 300);
}

function definirDificuldade(tempo) {
    contadorTempo = tempo;
    return tempo;
}

function contarPontos() {
    contador++;
    pontuacao.innerText = contador;
    
}

function limitarTempo(tempo) {
    tempoLimite.innerText = tempo; 
    if(tempo > 0) {
        intervaloJogo = setTimeout(function() {
            limitarTempo(tempo - 1);
        }, 1000);
    } else {
        tempoEsgotado(); 
    }
}

function tempoEsgotado() {

    alert("Tempo esgotado! Sua pontuação: " + contador);
}

function iniciarJogo() {
    contador = 0;
    pontuacao.innerText = contador;
    alocarAlvo(); 
    limitarTempo(contadorTempo);
}

function pararJogo() {
    clearTimeout(intervaloJogo);
}