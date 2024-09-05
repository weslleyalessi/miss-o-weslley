const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que pode ser considerado uma das principais causas da diminuição das abelhas no mundo?  ",
        alternativas: [
            {
                texto: "Uso de pesticidas.",
                afirmacao: "Eles afetam diretamente o sistema nervoso das abelhas, causando desorientação e morte."
            },
            {
                texto: "A destruição de habitats.",
                afirmacao: "O desmatamento e a urbanização reduzem os ambientes naturais onde as abelhas podem prosperar."
            }
           
        ]
    },
    {
        enunciado: "Como a queda das abelhas impacta o meio ambiente?",
        alternativas: [
            {
                texto: "A redução da polinização.",
                afirmacao: "Com menos abelhas, muitas plantas têm dificuldade para se reproduzir, o que afeta a biodiversidade."
            },
            {
                texto: "O desequilíbrio ecológico.",
                afirmacao: "A ausência de abelhas pode afetar a cadeia alimentar, prejudicando animais que dependem de plantas polinizadas."
            }
           
        ]
    },
    {
        enunciado: "Quais são as soluções mais eficazes para conter a queda das abelhas?",
        alternativas: [
            {
                texto: "Agricultura orgânica.",
                afirmacao:"A diminuição do uso de produtos químicos reduz os riscos para as abelhas e para o meio ambiente."
            },
            {
                texto: "Criação de áreas de conservação.",
                afirmacao:"Reservas naturais ajudam a preservar os habitats das abelhas e promovem a biodiversidade."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();