# QA Automation Framework

Framework de automação de testes desenvolvido com foco em boas práticas de mercado para automação Web, utilizando Cypress, Cucumber BDD e arquitetura Page Object Model.

O objetivo do projeto é construir um framework completo de testes automatizados, simulando uma estrutura utilizada em ambientes profissionais de QA.

---

## Objetivo

Criar uma base de automação escalável contendo:

* Automação Web
* Testes BDD
* Page Object Model
* Custom Commands
* Massa de dados
* Testes de API
* Integração contínua (CI/CD)

---

## Aplicação utilizada

Os testes Web são executados utilizando a aplicação:

Automation Exercise

https://automationexercise.com/

---

# Tecnologias

* JavaScript
* Cypress
* Cucumber BDD
* Esbuild
* Node.js

---

# Estrutura do projeto

```text
qa-automation-framework
│
├── cypress
│   │
│   ├── e2e
│   │   └── features
│   │       └── login.feature
│   │
│   ├── fixtures
│   │
│   ├── pages
│   │   └── LoginPage.js
│   │
│   └── support
│       │
│       ├── commands.js
│       ├── e2e.js
│       │
│       └── step_definitions
│           └── login.js
│
├── docs
│
├── .cypress-cucumber-preprocessorrc.json
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Configurações realizadas

## Cypress

* Cypress configurado para execução de testes automatizados.
* Configuração de ambiente realizada.
* Screenshots habilitados em caso de falha.
* Gravação de vídeos durante execução dos testes.

## Cucumber BDD

* Pré-processador Cucumber configurado.
* Arquivos `.feature` utilizados para escrita dos cenários.
* Step definitions implementadas utilizando JavaScript.

## Esbuild

* Esbuild configurado para integração com Cypress e Cucumber.

## Page Object Model

Implementada a primeira camada de Page Object Model.

Responsabilidades separadas:

* Feature:

  * Descreve o comportamento esperado.

* Step Definition:

  * Controla o fluxo do cenário.

* Page Object:

  * Centraliza os elementos e ações da aplicação.

Exemplo:

```text
Feature
   ↓
Step Definition
   ↓
Page Object
   ↓
Cypress
```

---

# Cenários implementados

## Login

### Feature

Acessar a tela de login

### Fluxo validado

* Usuário acessa a página inicial.
* Usuário seleciona o menu "Signup / Login".
* Sistema direciona para a tela de login.

Status:

✅ Implementado

---

# Como executar o projeto

## Instalar dependências

```bash
npm install
```

---

## Abrir Cypress em modo interativo

```bash
npm run cy:open
```

---

## Executar testes em modo headless

```bash
npm run cy:run
```

---

# Evidências de execução

O framework está configurado para gerar:

* Screenshots em falhas
* Vídeos das execuções

Arquivos gerados:

```text
cypress/screenshots
cypress/videos
```

---

# Roadmap

## Configuração

* [x] Configuração do Cypress
* [x] Configuração do Cucumber
* [x] Configuração do Esbuild
* [x] Estrutura inicial do framework

---

## Automação Web

* [x] Primeiro cenário BDD
* [x] Page Object Model
* [ ] Custom Commands
* [ ] Fixtures
* [ ] Login completo
* [ ] Cadastro de usuário
* [ ] Produtos
* [ ] Carrinho
* [ ] Checkout

---

## Automação API

* [ ] Configuração de testes API
* [ ] GET requests
* [ ] POST requests
* [ ] PUT requests
* [ ] DELETE requests

---

## Banco de Dados

* [ ] Integração com banco de dados
* [ ] Consultas SQL
* [ ] Validação de dados

---

## CI/CD

* [ ] GitHub Actions
* [ ] Execução automática dos testes
* [ ] Geração de relatórios

---

# Status do projeto

Em desenvolvimento 🚀

Entregas concluídas:

* ✅ Projeto criado
* ✅ Cypress configurado
* ✅ Cucumber configurado
* ✅ Esbuild configurado
* ✅ Primeiro cenário BDD implementado
* ✅ Page Object Model implementado

---

# Autor

Márcio Dutra

Projeto desenvolvido para estudo, evolução técnica e demonstração de boas práticas em automação de testes.
