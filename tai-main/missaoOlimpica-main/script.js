const modalidades = ["reciclagem"];


const escolha = 2; // Escolha do grupo é "...."

document.querySelector('body').style.backgroundImage = "url('img/" + modalidades[escolha] + ".png')";
document.querySelector('title').textContent = " Missão Reciclagem | " + modalidades[escolha];
document.querySelector('h1').innerHTML = " Missão Reciclagem<br> " + modalidades[escolha];

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let pontos = 0; // variável "pontos" iniciando com 0
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas[escolha].length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[escolha][atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    pontos += opcaoSelecionada.pontos;
    console.log(pontos);
    mostraPergunta();
}

function mostraResultado() {
    textoResultado.textContent = historiaFinal;
    caixaPerguntas.textContent = "Resultado";
    caixaAlternativas.textContent = "";
    podiumMedalhas(); // chamada da função podiumMedalhas
}
mostraPergunta();
