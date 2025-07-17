# 🌌 Nossa Constelação — 5 Anos

**Uma homenagem interativa, sensível e mágica para celebrar meia década de amor.**

Este projeto foi criado como um presente de 5 anos de relacionamento. A ideia era transformar momentos importantes da nossa jornada em uma constelação de estrelas, onde cada memória pode ser clicada e explorada. O resultado é um site visualmente envolvente, responsivo e tocante — misturando design, programação e muito afeto.

🔗 **Acesse o projeto em:** [https://a-present-to-her.vercel.app/](https://a-present-to-her.vercel.app/)

## ✨ Funcionalidades

- Parallax animado em múltiplas camadas simulando profundidade espacial.
- Estrelas animadas com tooltip e modal de memória ao clique.
- Conexão visual entre momentos por meio de linhas SVG animadas.
- Trilha sonora de fundo com controle de volume.
- Interface responsiva e fluida, com foco em UX emocional.

## 🛠️ Tecnologias utilizadas

- **HTML5** + **CSS3**
- **JavaScript (Vanilla)**
- **TailwindCSS** (via CDN)
- **Font Awesome** (ícones)
- **Google Fonts** (Inter)
- **SVG** para desenhar conexões entre estrelas

## 📁 Estrutura

- `index.html`: toda a lógica, estilo e estrutura está neste único arquivo (monolítico).
- As memórias estão organizadas em um array JS, contendo:
  - `id`, `data`, `titulo`, `descricao`
  - `posicao` (com `top` e `left`)
  - `tamanho` (pequena, padrão ou grande)

## 💡 Como usar

1. Basta acessar o site em qualquer navegador moderno.
2. Espere a introdução desaparecer.
3. Explore clicando nas estrelas maiores (memórias principais) ou passando o mouse nas pequenas (conquistas e detalhes).
4. A trilha sonora pode ser controlada no botão no canto inferior esquerdo.

## 🖤 Créditos

Criado com amor por [Rô](https://github.com/rodrigofrangel), celebrando o tempo, a cura, as transformações e a eternidade possível entre dois corações que escolheram caminhar lado a lado — mesmo nos dias difíceis.
