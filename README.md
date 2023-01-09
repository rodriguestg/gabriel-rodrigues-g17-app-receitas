# App de Receitas! :bento:

  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

  Este foi um projeto em grupo em que desenvolvemos um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

  Nele é possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks!

  ⚠️ A base de dados são 2 APIs distintas, uma para comidas e outra para bebidas.

  O layout tem como foco dispositivos móveis, dessa forma o protótipo foi desenvolvido para telas menores.

  <summary><strong>:memo: Habilidades</strong></summary><br />

  Nesse projeto, utilizamos:

  - _Redux_ para gerenciar estado
  - A biblioteca _React-Redux_
  - A Context API do _React_ para gerenciar estado
  - O _React Hook useState_
  - O _React Hook useContext_
  - O _React Hook useEffect_
  - Hooks customizados
  - Local Storage
  - Bootstrap

# Caso queira conhecer o projeto em sua máquina:

<details>
  <summary><strong>Detalhes:</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:rodriguestg/gabriel-rodrigues-g17-app-receitas.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd gabriel-rodrigues-g17-app-receitas.git`

  2. Instale as dependências e inicialize o projeto

  - Instale as dependências:
    - `npm install`
  - Inicialize o projeto:
    - `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
  
<details>
  <summary><strong>🎛 Linter e Stylelint</strong></summary><br />

  Usamos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento, nós utilizamos neste projeto o linter `ESLint`.
  </details>

<details>
  <summary><strong>:busts_in_silhouette: Trello como ferramenta Kanban</strong></summary><br />

  Utilizamos metodologias ágeis para grupo organizar as atividades e dividir as tarefas do grupo através de um modelo de kanban.
</details>

  <details>
    <summary><strong>Testes de cobertura :open_umbrella:</strong></summary><br />
  
    Criamos os testes da aplicação, atingindo mais de 90% de cobertura de testes.
    É possível verificar o percentual da cobertura de testes com o comando `npm run test-coverage`. 
  </details>
</details>

  * <details><summary><b> APIs :gear:</b></summary>

    * <details><summary><b> TheMealDB API</b></summary>

      O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.
      </details>

    * <details><summary><b> The CockTailDB API</b></summary>
      Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.
    </details>

  * <details><summary><b> Rotas</b></summary>

      As rotas da aplicação:

      * Tela de login: `/`;
      * Tela principal de receitas de comidas: `/foods`;
      * Tela principal de receitas de bebidas: `/drinks`;
      * Tela de detalhes de uma receita de comida: `/foods/{id-da-receita}`;
      * Tela de detalhes de uma receita de bebida: `/drinks/{id-da-receita}`;
      * Tela de receita em progresso de comida: `/foods/{id-da-receita}/in-progress`;
      * Tela de receita em progresso de bebida: `/drinks/{id-da-receita}/in-progress`;
      * Tela de perfil: `/profile`;
      * Tela de receitas feitas: `/done-recipes`;
      * Tela de receitas favoritas: `/favorite-recipes`.
      </details>

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
