<h1 align="center">
    <img alt="MoveIt" src=".github/logo.svg" height="100px" />
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/alexandrecorazza/moveit?style=flat-square">
  <img alt="GitHub" src="https://img.shields.io/github/license/alexandrecorazza/moveit?style=flat-square"> 
</p>
<p align="center">
  <a href="#art-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-configuração">Configuração do projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pushpin-to-do">To-do</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="design do projeto" width="650px" src="./.github/moveIt.gif" />
<p>

## :art: Layout
O layout do projeto foi desenhado no [Figma](https://www.figma.com/) e pode ser visto [clicando aqui](https://www.figma.com/file/5ac7L17dV1nWp9osnDr6eN/Move.it-2.0-(Copy)?node-id=160%3A2761).

## :bookmark: Sobre

O **MoveIt** é uma aplicação de incentivo a prática de exercícios aos usuários que passam muito tempo no computador. Utilizando a técnica Pomodoro, ao terminar o tempo definido pelo contador são ofericidos desafios que trabalham o corpo e a visão. Conforme o usuário completa os desafios, o mesmo ganha experiência e upa de level, deiando a prática dos exercícios mais divertida.
  
Este projeto foi idealizado e desenvolvido pela [Rocketseat](https://rocketseat.com.br/).

## :rocket: Tecnologias

- [NextJS](https://github.com/vercel/next.js/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [Github Oauth](https://docs.github.com/en/developers/apps/authorizing-oauth-apps)


## ⚙️ Configuração

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir uma conta cadastrada no Github
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - É **necessário** ter o gerenciador de pacotes **[Yarn](https://yarnpkg.com/)** instalado ou o **[NPM](https://www.npmjs.com/)**.

- ### Executando

  ```bash
  # Abra um terminal e copie este repositório com o comando
  $ git clone https://github.com/alexandrecorazza/moveit.git
  # ou use a opção de download.

  # Entre na pasta server 
  $ cd moveit-next/

  # Instale as dependências
  $ yarn install

  # Rode o servidor
  $ yarn dev
  ```

<br>

## :pushpin: To-Do

- [x] Adicionar página de autenticação do usuário com Github
- [ ] Implementar aplicação mobile
- [ ] Criar sistema de hanking entre usuários

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
