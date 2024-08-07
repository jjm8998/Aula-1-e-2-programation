const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1-Entre essas frutas, qual você prefere?",
        alternativas: [
            "a)Acerola",
            "b)Laranja"
        ]
    },
    {
        enunciado: "2-Qual desses pratos é uma comida típica da Espanha,qual você prefere?",
        alternativas: [
            "a)Paella",
            "b)Guacamole"
        ]
    }

    {
        enunciado: "3-Entre esses alimentos que possuem maior quantidade de vitamina B12,quais você prefere?",
        alternativas: [
            "a)Atum,salmão,leite",
            "b)Banana,nozes,fígado"
        ]
    },
    {
        enunciado: "4-Qual destes cantores você prefere”?",
        alternativas: [
            "a)Michael Jackson",
            "b)Belo"
        ]
    }
{
        enunciado: "5-Quais instrumentos musicais você gosta mais?",
        alternativas: [
            "a)Pandeiro,berimbau,cavaquinho",
            "b)Violino,clarinete,harpa"
        ]
    }

    {
        enunciado: "6-Qual alternativa você acha que apresenta melhor definição sobre música?",
        alternativas: [
            "a)É a combinação de ritmo, harmonia e melodia, de maneira agradável ao ouvido.",
            "b)Trata-se de um movimento controlado ou calculado que se produz pela ordenação de elementos diferentes."
        ]
    },
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
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
