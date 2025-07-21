# 🌌⏳Constelação do Tempo

![Banner do Repositório](/img/a-present-to-her.png)

**Uma experiência interativa para celebrar cinco anos de compromisso.**

Este projeto foi desenvolvido como um presente de aniversário de namoro, transformando marcos importantes da nossa história em uma constelação navegável. Cada memória pode ser acessada por meio de estrelas interativas, com uma interface leve, fluida e responsiva — combinando código, design e narrativa.

🔗 **Acesse o projeto em:** [https://a-present-to-her.vercel.app/](https://a-present-to-her.vercel.app/)

## ✨ Funcionalidades

- Efeito parallax com múltiplas camadas, criando profundidade.
- Estrelas com animações, tooltips e modais com detalhes das memórias.
- Conexões visuais entre momentos usando linhas SVG animadas.
- Trilha sonora com controle do volume.
- Compatível com dispositivos móveis e navegadores modernos.

## 🛠️ Tecnologias utilizadas

- **HTML5**, **CSS3**, **JavaScript**
- **TailwindCSS** (via CDN)
- **Font Awesome** (ícones)
- **Google Fonts** (Inter)
- **SVG** para desenho vetorial dinâmico

## 📁 Estrutura

- `index.html`: estrutura principal da página.
- `style.css`: estilos visuais e responsividade.
- `script.js`: lógica de exibição, interação e dados.

As memórias estão organizadas em um array de objetos JS, com os seguintes campos:

- `id`, `data`, `titulo`, `descricao`
- `posicao` (`top`, `left`)
- `tamanho` (`pequena`, `padrao`, `grande`)

## 💡 Como usar

1. Acesse o site em qualquer navegador atual.
2. Clique na tela inicial para iniciar.
3. Explore as estrelas: clique nas grandes, passe o mouse pelas pequenas.
4. Ative ou desative o som usando o botão no canto inferior esquerdo.

## 🖋️ Autor

Desenvolvido por [Rodrigo](https://github.com/RodrigoFrangel), como parte de uma celebração pessoal e criativa — unindo desenvolvimento web com narrativas visuais.
