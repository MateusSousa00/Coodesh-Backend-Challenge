### Backend Challenge By Coodesh

Desafio proposto pela plataforma Coodesh, utilizando a API:
<a>https://world.openfoodfacts.org/data</a>

Foram utilizados as Tecnologias abaixo:

- Node: ambiente de execução do código Javascript
- Typescript: linguagem utilizaada, o superset do Javascript
- Express: framework para utilização das rotas
- Axios: para comunicar com a API Open Food Facts
- Docker: para criação do Container
- docker-compose: para orquestração dos containers
- Makefile: para facilitar a manipulação dos containers
- Dotenv: para utilizar as variáveis de ambiente
- Swagger: para documentar o projeto
- Mongoose: para manipular as chamadas no MongoDB e também as queries
- Cron: para realizar a automação da função de atualizar o banco de dados
- Prettier: para organização e padronização do codigo

## O que é necessário para iniciar o projeto?

- Docker e docker-compose
- Node

## Instalação e execução do projeto:

- clone o projeto com sua chave ssh e utilize no terminal o comando `git clone "git@github..."`
- verifique se possui o yarn instalado na maquina com o comando `yarn --version`,
- caso não possua, instale com o comando `npm install --global yarn` (ou `npm i -g yarn`)
- duplique o `.env.example` e renomeie o arquivo para `.env` preenchendo as variáveis
- execute os comandos `yarn && yarn build`
- execute o comando `make up` para inicializar o projeto no container (caso queira localmente: `yarn dev`)

## documentação

- Está na rota: `http://localhost:3000/docs`