const CONFIGURACAO = {
    tempoFadeOutIntro: 2500,
    duracaoDesenhoLinha: 0.4,
};

const memorias = [
    // --- Marcos do Relacionamento ---
    { id: 1, data: '08/05/2020', titulo: 'A Primeira Mensagem', descricao: 'Graças à quarentena e a uma live no Instagram, você me viu e decidiu me seguir (logo antes de curtir todas as minhas fotos kkkkk). Mal sabia eu que isso mudaria minha vida pra sempre — e só pra melhor.', posicao: { top: '15%', left: '10%' }, tamanho: 'padrao' },
    { id: 2, data: '09/05/2020', titulo: 'Primeiro "Bom Dia" e sua Primeira Aula Comigo', descricao: 'Foi só o primeiro passo da nossa vida juntos. Um detalhe pequeno, mas que já deixava claro que havia algo único entre nós. Algo especial.', posicao: { top: '22%', left: '15%' }, tamanho: 'padrao' },
    { id: 3, data: '09/07/2020', titulo: 'O Primeiro "Eu te amo"', descricao: 'Depois dois meses, alguns “amo vc” despretensiosos e muitos coraçõezinhos, essas três palavras finalmente deram nome ao que a gente já sentia. ❤️', posicao: { top: '35%', left: '12%' }, tamanho: 'padrao' },
    { id: 4, data: '15/07/2020', titulo: 'Nosso Primeiro Encontro', descricao: 'Você dizendo “eu te amo” toda hora, a Saveiro caindo aos pedaços, o Protegio, e você "com calor" — foi o começo de algo único e absurdamente especial.', posicao: { top: '25%', left: '20%' }, tamanho: 'padrao' },
    { id: 5, data: '18/10/2020', titulo: 'Nós Pedalando no Lago', descricao: 'Nosso terceiro encontro e o dia em que te apresentei “Ponto de Exclamação”. Foi nesse momento que eu soube, com toda certeza, que você um dia seria minha esposa.', posicao: { top: '45%', left: '28%' }, tamanho: 'padrao' },
    { id: 6, data: '27/11/2020', titulo: 'Nossa Primeira Noite Juntos', descricao: 'Depois de meses falando sobre como queríamos dormir juntinhos... finalmente aconteceu. E foi, até então, a melhor noite da minha vida. ❤️', posicao: { top: '58%', left: '20%' }, tamanho: 'padrao' },
    { id: 7, data: '15/12/2020', titulo: 'Sua Primeira Noite na Minha Casa', descricao: 'Literalmente um sonho realizado. Uma casa só pra nós. Ter você ali comigo me deu a certeza de que eu tinha encontrado meu caminho.', posicao: { top: '68%', left: '30%' }, tamanho: 'padrao' },
    { id: 8, data: '26/01/2021', titulo: 'Nossa Viagem para a Praia', descricao: 'O apartamento, a varanda, a piscina (até o yakisoba com ingredientes ruins). Criar aquelas memórias contigo me fez sentir a pessoa mais sortuda e feliz do mundo.', posicao: { top: '80%', left: '22%' }, tamanho: 'padrao' },
    { id: 9, data: '26/04/2021', titulo: 'Nossas Alianças', descricao: 'Um gesto simples, mas cheio de significado. Até hoje, usar esse anel me lembra do que temos: amor, parceria e rumo.', posicao: { top: '85%', left: '40%' }, tamanho: 'padrao' },
    { id: 10, data: '21/07/2021', titulo: 'Você se Mudou Comigo', descricao: 'O dia em que “minha casa” virou “nossa casa”. Ter você comigo todos os dias era tudo o que eu queria — e ainda é.', posicao: { top: '80%', left: '60%' }, tamanho: 'padrao' },
    { id: 11, data: '07/11/2021', titulo: 'Abrimos Nosso Relacionamento', descricao: 'Começou com uma mensagem de madrugada, mas abriu espaço para algo que já sabiamos que estava fadado a acontecer. Abrir nosso relacionamento deixou tudo mais leve, saudável e melhor.', posicao: { top: '65%', left: '70%' }, tamanho: 'padrao' },
    { id: 12, data: '28/01/2022', titulo: 'A Chegada da Kira', descricao: 'Nossa família começou quando nosso menino chegou 💕. Com o rabinho torto e o pintinho no queixo... ele virou nosso bem mais precioso nesse mundo.', posicao: { top: '50%', left: '85%' }, tamanho: 'padrao' },
    { id: 13, data: '10/06/2022', titulo: 'Entramos na Academia', descricao: 'Mesmo com os “Gengis Khan”, as “pernas de passarinho” e a louca da rua, treinar com minha parceira de academia fazia tudo ser mais divertido. Sinto falta de malharmos juntos, amor. Precisamos voltar hehe.', posicao: { top: '35%', left: '90%' }, tamanho: 'padrao' },
    { id: 14, data: '10/01/2025', titulo: 'Nossa Casinha Própria', descricao: 'Depois de tanto tempo, finalmente conseguimos a nossa própria casinha. Um espaço só nosso. Nem sempre é fácil, mas vale cada segundo. E esse foi só o primeiro passo da nossa vida real-juntos-oficial.', posicao: { top: '50%', left: '50%' }, tamanho: 'padrao' },
    
    // --- Aniversários ---
    { id: 15, data: '15/07/2021', titulo: 'Nosso 1º Aniversário', descricao: 'Um ano que passou voando. Cheio de mensagens, ligações no WhatsApp, e momentos que viraram meus favoritos. Tudo o que a gente mais sonhava era poder ficar juntos o tempo todo — e cada instante contigo era o mais precioso.', posicao: { top: '69%', left: '53%' }, tamanho: 'grande' },
    { id: 16, data: '15/07/2022', titulo: 'Nosso 2º Aniversário', descricao: 'Dois anos construindo a base do nosso relacionamento. Nosso primeiro ano morando juntos. A gente ainda tava, tecnicamente, se conhecendo… mas eu já sabia que queria passar minha vida com você. PS: ir pra academia contigo era muito divertido kkkkk.', posicao: { top: '45%', left: '65%' }, tamanho: 'grande' },
    { id: 17, data: '15/07/2023', titulo: 'Nosso 3º Aniversário', descricao: 'Sendo bem sincero, mozi… não lembro direito como foi nosso terceiro ano kkkkk. Mas lembro que, mesmo dividindo a casa com minha família, morar contigo fez daqueles dias os melhores da minha vida.', posicao: { top: '30%', left: '50%' }, tamanho: 'grande' },
    { id: 18, data: '15/07/2024', titulo: 'Nosso 4º Aniversário', descricao: 'Quatro anos, três morando juntos. A essa altura, nosso amor já era algo sólido, e eu tinha certeza de que duraria muitos e muitos anos. Não foi um ano fácil pra gente — mas foi um dos mais necessários pra chegarmos até aqui. ❤️', posicao: { top: '50%', left: '40%' }, tamanho: 'grande' },
    { id: 19, data: '15/07/2025', titulo: 'Nosso 5º Aniversário!', descricao: 'Cinco anos. Meia década, mozi! E aqui estamos: com nosso filhinho, nossa casa, mandando bem nos trabalhos que a gente tanto queria, e um futuro brilhante pela frente. Tudo o que eu mais quero é viver essa vida com você. Nem sempre vai ser fácil, mas eu sempre estarei do teu lado. Te amo pra sempre, amor. ❤️❤️', posicao: { top: '20%', left: '80%' }, tamanho: 'grande' },
    
    // --- Conquistas Pessoais ---
    { id: 20, data: '2021', titulo: 'Terminei a Faculdade de Letras', descricao: '', posicao: { top: '5%', left: '30%' }, tamanho: 'pequena' },
    { id: 21, data: '2021', titulo: 'Você fez seu primeiro Curso de Massoterapia (online)', descricao: '', posicao: { top: '95%', left: '5%' }, tamanho: 'pequena' },
    { id: 22, data: '2022', titulo: 'Entrei na Trybe', descricao: '', posicao: { top: '8%', left: '65%' }, tamanho: 'pequena' },
    { id: 23, data: '2022', titulo: 'Você teve suas ilustrações publicadas em um livro', descricao: '', posicao: { top: '15%', left: '50%' }, tamanho: 'pequena' },
    { id: 24, data: '2022', titulo: 'Concluiu seu Estágio de Massoterapia', descricao: '', posicao: { top: '90%', left: '95%' }, tamanho: 'pequena' },
    { id: 25, data: '2023', titulo: 'Terminei o curso da Trybe', descricao: '', posicao: { top: '55%', left: '5%' }, tamanho: 'pequena' },
    { id: 26, data: '2024', titulo: 'Entrei na Athon', descricao: '', posicao: { top: '50%', left: '95%' }, tamanho: 'pequena' },
    { id: 27, data: '2024', titulo: 'Concluiu seu curso do Marcelo Doi', descricao: '', posicao: { top: '8%', left: '40%' }, tamanho: 'pequena' },
    { id: 28, data: '2024', titulo: 'Você entrou no Tera Spa', descricao: '', posicao: { top: '5%', left: '5%' }, tamanho: 'pequena' },
    { id: 29, data: '2024', titulo: 'Eu ganhei o MBA', descricao: '', posicao: { top: '95%', left: '60%' }, tamanho: 'pequena' },
    { id: 30, data: '2024', titulo: 'Consegui meu Emprego de Programador', descricao: '', posicao: { top: '60%', left: '45%' }, tamanho: 'pequena' },
    { id: 31, data: '2022', titulo: 'Cuidamos e curamos nosso filhote juntos', descricao: '', posicao: { top: '45%', left: '78%' }, tamanho: 'pequena' },
    { id: 32, data: '2024', titulo: 'Você se tornou a massoterapeuta incrível que estava destinada a ser', descricao: '', posicao: { top: '12%', left: '95%' }, tamanho: 'pequena' },
    { id: 33, data: '2023', titulo: 'Você e sua irmã se reconectaram e viraram amigas', descricao: '', posicao: { top: '75%', left: '85%' }, tamanho: 'pequena' },
    { id: 34, data: '2025', titulo: 'Você conquistou o reconhecimento que merece no seu trabalho', descricao: '', posicao: { top: '25%', left: '35%' }, tamanho: 'pequena' },
];

document.addEventListener('DOMContentLoaded', () => {
    const ceu = document.getElementById('ceu');
    const linhasSvg = document.getElementById('linhas-constelacao');
    const elementosEstrela = [];

    function iniciar() {
        configurarIntroducao();
        criarEstrelas();
        setTimeout(desenharLinhasConstelacao, CONFIGURACAO.tempoFadeOutIntro + 500);
        configurarOuvintesDeEventos();
        configurarParallax();
    }

    function configurarIntroducao() {
        const introducao = document.getElementById('introducao');
        setTimeout(() => introducao.classList.add('escondido'), CONFIGURACAO.tempoFadeOutIntro);
    }

    function criarEstrelas() {
        memorias.sort((a, b) => converterData(a.data) - converterData(b.data));
        memorias.forEach(memoria => {
            const estrela = document.createElement('div');
            estrela.className = `estrela ${memoria.tamanho}`;
            estrela.style.top = memoria.posicao.top;
            estrela.style.left = memoria.posicao.left;
            estrela.style.animationDelay = `${Math.random() * 3}s`;
            estrela.dadosMemoria = memoria;
            
            if (memoria.tamanho === 'pequena') {
                configurarEventosTooltip(estrela, memoria);
            } else {
                estrela.addEventListener('click', () => abrirModalMemoria(memoria));
            }
            
            ceu.appendChild(estrela);
            elementosEstrela.push(estrela);
        });
    }
    
    function configurarEventosTooltip(estrela, memoria) {
        let dica = null;
        estrela.addEventListener('mouseenter', () => {
            if (dica) return;
            
            dica = document.createElement('div');
            dica.className = 'dica-estrela';
            dica.textContent = memoria.titulo;
            ceu.appendChild(dica);

            const rectEstrela = estrela.getBoundingClientRect();
            const rectCeu = ceu.getBoundingClientRect();
            const rectDica = dica.getBoundingClientRect();

            let top = rectEstrela.top - rectCeu.top + (rectEstrela.height / 2) - (rectDica.height / 2);
            let left;

            if (rectEstrela.left > window.innerWidth / 2) {
                left = rectEstrela.left - rectCeu.left - rectDica.width - 15;
            } else {
                left = rectEstrela.right - rectCeu.left + 15;
            }
            
            dica.style.top = `${top}px`;
            dica.style.left = `${left}px`;
            
            getComputedStyle(dica).opacity; 
            
            dica.style.opacity = '1';
            dica.style.transform = 'scale(1)';
        });

        estrela.addEventListener('mouseleave', () => {
            if (dica) {
                dica.style.opacity = '0';
                dica.style.transform = 'scale(0.9)';
                dica.addEventListener('transitionend', () => {
                    dica.remove();
                    dica = null;
                }, { once: true });
            }
        });
    }

    function desenharLinhasConstelacao() {
        linhasSvg.innerHTML = '';
        const rectCeu = ceu.getBoundingClientRect();
        const estrelasPrincipais = elementosEstrela.filter(estrela => estrela.dadosMemoria.tamanho !== 'pequena');

        for (let i = 0; i < estrelasPrincipais.length - 1; i++) {
            const estrelaInicial = estrelasPrincipais[i].getBoundingClientRect();
            const estrelaFinal = estrelasPrincipais[i + 1].getBoundingClientRect();
            const linha = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            
            linha.setAttribute('x1', estrelaInicial.left + estrelaInicial.width / 2 - rectCeu.left);
            linha.setAttribute('y1', estrelaInicial.top + estrelaInicial.height / 2 - rectCeu.top);
            linha.setAttribute('x2', estrelaFinal.left + estrelaFinal.width / 2 - rectCeu.left);
            linha.setAttribute('y2', estrelaFinal.top + estrelaFinal.height / 2 - rectCeu.top);
            
            linha.style.animationDuration = `${CONFIGURACAO.duracaoDesenhoLinha}s`;
            linha.style.animationDelay = `${i * CONFIGURACAO.duracaoDesenhoLinha}s`;

            linhasSvg.appendChild(linha);
        }
    }

    function configurarOuvintesDeEventos() {
        window.addEventListener('resize', desenharLinhasConstelacao);
        configurarModal('modalMemoria', 'botaoFechar');
        configurarPlayerMusica();
    }

    function configurarParallax() {
        const camadasParallax = document.querySelectorAll('.fundo-parallax');
        document.body.addEventListener('mousemove', e => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 2;
            const y = (clientY / window.innerHeight - 0.5) * 2;
            
            // EFEITO PARALLAX NA IMAGEM DE FUNDO
            document.body.style.backgroundPosition = `${50 + x * 2}% ${50 + y * 2}%`;

            ceu.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
            camadasParallax[0].style.transform = `translate(${x * 20}px, ${y * 20}px)`; // camada1
            camadasParallax[1].style.transform = `translate(${x * 35}px, ${y * 35}px)`; // camada2
            if (camadasParallax[2]) camadasParallax[2].style.transform = `translate(${x * 50}px, ${y * 50}px)`; // camada3
            if (camadasParallax[3]) camadasParallax[3].style.transform = `translate(${x * 65}px, ${y * 65}px)`; // camada4
            if (camadasParallax[4]) camadasParallax[4].style.transform = `translate(${x * 85}px, ${y * 85}px)`; // camada5
            if (camadasParallax[5]) camadasParallax[5].style.transform = `translate(${x * 110}px, ${y * 110}px)`;// camada6
        });
    }
    
    function converterData(strData) {
        if (/^\d{4}$/.test(strData)) {
            return new Date(strData, 0, 1);
        }
        const [dia, mes, ano] = strData.split('/');
        return new Date(ano, mes - 1, dia);
    }

    function abrirModalMemoria(memoria) {
        const modal = document.getElementById('modalMemoria');
        document.getElementById('modalData').textContent = memoria.data || '';
        document.getElementById('modalTitulo').textContent = memoria.titulo || '';
        document.getElementById('modalDescricao').textContent = memoria.descricao || '';
        modal.classList.remove('escondido');
    }

    function configurarModal(idModal, idBotaoFechar, idBotaoAbrir = null) {
        const modal = document.getElementById(idModal);
        const botaoFechar = document.getElementById(idBotaoFechar);
        
        if (idBotaoAbrir) {
            document.getElementById(idBotaoAbrir).addEventListener('click', () => modal.classList.remove('escondido'));
        }

        botaoFechar.addEventListener('click', () => modal.classList.add('escondido'));
        modal.addEventListener('click', (evento) => {
            if (evento.target === modal) modal.classList.add('escondido');
        });
    }
    
    function configurarPlayerMusica() {
        const musica = document.getElementById('musicaFundo');
        const controleVolume = document.getElementById('controleVolume');
        const iconeVolume = document.getElementById('iconeVolume');
        
        let playPromise = musica.play();
        if (playPromise !== undefined) {
            playPromise.catch(erro => {
                console.log("A reprodução automática foi bloqueada. O usuário precisa interagir com a página primeiro.");
                document.body.addEventListener('click', () => musica.play(), { once: true });
            });
        }
        
        controleVolume.addEventListener('click', () => {
            musica.muted = !musica.muted;
            if(musica.paused) {
                musica.play();
            }
            iconeVolume.className = musica.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
        });
    }

    iniciar();
});
