
# Savil Desk - Landing Page feito com Bootstrap

[![wakatime](https://wakatime.com/badge/github/savio591/savildesk.svg)](https://wakatime.com/badge/github/savio591/savildesk)
[![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
![Next JS](https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?logo=vercel&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&logoColor=white)
![Bootstrap](https://badgen.net/badge/styleframework/bootstrap/blue)

Este projeto consistiu em criar uma **landing page** como proposta de colocação no mercado através da [Brivia], uma empresa de Marketing/P&D.

Clique [neste link](https://savio591.github.io/savildesk) para ver o resultado do projeto.

# Requisitos da proposta:
*	Desenvolver em HTML5, html deve ser **semântico** com as boas práticas de **SEO**; 
*	Utilizar **SASS/SCSS** para CSS;
*	Utilizar Bootstrap Grid 4 ou superior como framework CSS;
*	Deve ser **responsivo** respeitando os **breakpoints do Bootstrap**;
*	Utilizar uma **ferramenta de automatização** de tarefas para compilar e minificar os assets;
*	O formulário deve conter **validação** em todos os campos, não precisa fazer o envio;
*	Utilizar **SVG** para os ícones;
* O prazo de entrega é de **7 dias**, ou seja, **desenvolvido** entre **4/11/21** e **11/11/21**

# Cronograma:

A se basear no prazo e em atividades passadas, segui o seguinte cronograma.

| Nome                                           | Descrição                                                                                                                                  | Deadline                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Planejamento e concepção                       | Deve ser descrito todas as informações úteis e importantes para o desenvolvimento de peças gráficas e intelectuais(ex.: logo, copywriting) | 2º dia(5 de Nov. 2021)  |
| Desenvolvimento                                | Desenvolver, ler documentações e testar o projeto, sempre a ser orientado por componentes e partes(de cima para baixo), respectivamente.   | 6º dia(10 de Nov. 2021) |
| Correção de bugs e finalização de documentação | Preparar para entregar e boa sorte!                                                                                                        | 7º dia(11 de Nov. 2021) |

# Desenvolvimento:
## Concepção
De cara, pensei em misturar meu nome com o projeto é claro! Como devo seguir o modelo dos arquivos de apoio, a logo de forma rápida no figma, assim como os textos, cores, tipos e em palavras-chave que sejam atraentes para o SEO(Pelo tempo curto e pelo não-foco em redação, nos textos eu segui a minha intuição nessa parte).

**Observação:** Como usuário linux e por ter um computador *[low end]*, utilizar o Adobe XD ficou fora de cogitação para referenciar, portanto, utilizei meus conhecimentos e o layout a se basear na imagem enviada. Espero não perder pontos devido a detalhes de espaçamento ou animações feitas.

Para conciliar o React com o clássico HTML feito à mão, escolhi desenvolver com o Next.JS, que compila o projeto ao mais nativo possível, ou seja, ele dispensa a responsabilidade total do `HTML in JS` como **[SPA]**, em outras palavras, **renderiza e constroe o React em HTML e CSS**, todas as tags, elementos, classes geradas pelo Javascript. Com isso, é possível controlar e facilitar a leitura dos WebCrawlers dos provedores de busca, da geração das meta tags e de estilizações de pré-processadores.

Neste projeto utilizei este [kanban] e a aba [issues] para controle de tarefas e desenvolvimento.

Para acelerar o uso, configuração de ambiente e instalação de pacotes, usei este [template] de [ixkaito].

## Figma RSS(Replaced Service Sesign):
Ainda no primeiro dia da sprint, desenvolvi uma logo simples e rápida, isso graças ao nome do arquivo do [material de apoio]. **Savildesk**.

Desk? Autodesk? Autocad? Produtos? Moveis? Business?

Essas foram as palavras-chave, suficientes para a concepção da mídia e textos.

A imagem perfeita seria um produto de mobi relacionado à reuniões, obrigado [unsplash], encontrei a foto que está no hero da landing. Antes, verifiquei se eu poderia utilizar e posso sim. Será uma bela vitrine.

O resto da concepção foi fluiu a partir dos princípios: "copie, mas não faça igual ao material de apoio", botões quentes, textos discretos e sinceros, com toque familiar para pessoas da área e, talvez, humor.

## Let's to code!

Depois de um bom tempo, longe do bootstrap, recomecei a ver o que tinha de novo e vi que a versão 5.0 foi lançada recentemente. Para a minha felicidade, a nova versão usa o [SASS].

Segui como princípio criar componentes independentes e declarativos, mas que fazem parte do todo.

Os componentes foram criados rapidamente através das classes do [bootstrap], além da customização através dos [módulos css/scss].

Optei por aplicar diversas formas de desenvolvimento, por exemplo, o uso do layout misto utilizando classes, módulos css e inline styling.

Bugs ficaram como última prioridade. Logo, ao ver algo que pode ser consertado depois, fui a criar [issues].

## Padrões de desenvolvimento:

* Funções, classes, variáveis, comentários escritos em **Inglês**;
* **Hierarquia de arquivos:** a seguir o padrão comum entre desenvolvedores React/Next.JS(Acredito que para devs de outros ecossistemas que os padrões de código são autoexplicativas); Especialmente a [documentação ts] do Next.JS
* **Padrões de código e estilo:** O favorito dos JS Devs, [Airbnb], não como regra absoluta.

## O que aprendi?

* Habilidades de uso e importância de breakpoints para uma interface responsiva;
* Usar na prática as funções, mixins e módulos, importações e outras funcionalidades do SASS;
* Diversas classes do Boostrap;
* Otimização de imagens;

---
Feito com 💜, [Savio Castelo], 2021.

[Airbnb]: https://github.com/airbnb/javascript
[bootstrap]: https://getbootstrap.com/docs/5.0/getting-started/introduction/
[Brivia]: https://www.brivia.com.br "Brivia, me contrate, por favor! <3"
[dev]: https://github.com/savio591/savildesk/tree/dev
[documentação ts]: https://nextjs.org/docs/basic-features/layouts#with-typescript
[kanban]: https://github.com/savio591/savildesk/projects/1
[issues]: https://github.com/savio591/savildesk/issues
[ixkaito]: https://github.com/ixkaito
[low end]: https://translate.google.com/?um=1&ie=UTF-8&hl=en&client=tw-ob#auto/pt/low+end "Baixo Nível"
[material de apoio]: https://drive.google.com/file/d/1Lj-o77MooS29X2NqxpgpFqJgc24pnjkE/view
[módulos css/scss]: https://nextjs.org/docs/basic-features/built-in-css-support
[SASS]: https://getbootstrap.com/docs/5.0/customize/sass/ "Link para a documentação do SASS no BS-5"
[Savio Castelo]: https://savio591.github.io/ "Meu perfil pessoal"
[SPA]: https://www.portalgsti.com.br/2017/08/single-page-application-spa.html#:~:text=SPA%20significa%20Aplica%C3%A7%C3%A3o%20de%20P%C3%A1gina,de%20%23JavaScript%20e%20seus%20frameworks. "Single Page Application"
[template]: https://github.com/ixkaito/nextsss
[unsplash]: https://unsplash.com
