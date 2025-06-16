const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
        {
        enunciado: "Como o conhecimento africano sobre ervas medicinais pode ajudar a reduzir os danos do uso de drogas, especialmente em comunidades que buscam cura e bem-estar?",
        alternativas: [
            {
            texto: "Valorizando plantas nativas com propriedades calmantes e desintoxicantes, oferecendo terapias complementares que respeitam as tradições.",
            afirmacao: "Isso promove autonomia comunitária, integrando saberes ancestrais com saúde pública para uma recuperação mais completa. "
            },
            {
            texto: "Estabelecendo centros de pesquisa colaborativos na África, unindo expertise ocidental e sabedoria tradicional para desenvolver terapias à base de plantas, culturalmente adequadas e acessíveis.Alternativa2",
            afirmacao: "Criar plataformas de intercâmbio de conhecimento na África impulsiona a pesquisa local e garante soluções alinhadas às necessidades africanas, promovendo autossuficiência."
            },
        ]
    },
    {
        enunciado: "Como a visão africana sobre o uso ritualístico de plantas pode melhorar o diálogo sobre o uso e abuso de substâncias psicoativas, evitando a criminalização e promovendo a compreensão cultural?",
        alternativas: [
            {
            texto: "Estudando plantas etnobotânicas para diferenciar o uso tradicional (como a iboga) do abuso de drogas, educando sobre seus contextos e riscos.",
            afirmacao: "Distinguir o uso cultural do abuso cria políticas de drogas mais informadas e menos estigmatizantes, respeitando a diversidade de práticas. "
            },
            {
            texto: " Integrando o saber de curandeiros e fitoterapeutas africanos em programas de prevenção e tratamento, considerando a dimensão espiritual e comunitária da cura.",
            afirmacao: "Essa integração permite uma visão completa da dependência, reconhecendo que a cura abrange o bem-estar mental, espiritual e social."
            },
        ]
    },
];  

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click",()=>respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
    
}
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();
