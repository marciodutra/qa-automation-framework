# QA Automation Framework

Framework de automação de testes desenvolvido para fins de estudo e portfólio.

## Objetivo

Construir um framework completo de automação de testes utilizando boas práticas de mercado para automação Web, API e BDD.

## Aplicação utilizada

https://automationexercise.com/

## Tecnologias

- JavaScript
- Cypress
- Cucumber (BDD)
- Esbuild

## Estrutura atual

```text
qa-automation-framework
│
├── cypress
│   ├── e2e
│   │   └── features
│   │       └── login.feature
│   │
│   ├── fixtures
│   ├── pages
│   └── support
│       ├── commands.js
│       ├── e2e.js
│       └── step_definitions
│           └── login.js
│
├── docs
│
├── .cypress-cucumber-preprocessorrc.json
├── cypress.config.js
├── package.json
└── README.md
```

## Configuração realizada

- Base URL configurada para o Automation Exercise.
- Cypress configurado.
- Cucumber configurado.
- Esbuild configurado.
- Captura de screenshots em caso de falha.
- Gravação de vídeo durante a execução dos testes.

## Primeiro cenário BDD

Feature:

- Login

Scenario:

- Acessar a tela de login

Fluxo validado:

- Acessar a página inicial.
- Clicar no menu **Signup / Login**.
- Validar o redirecionamento para a página de login.

## Scripts

Abrir o Cypress

```bash
npm run cy:open
```

Executar os testes

```bash
npm run cy:run
```

## Status do projeto

- ✅ Projeto criado
- ✅ Cypress instalado
- ✅ Cucumber configurado
- ✅ Esbuild configurado
- ✅ Primeiro cenário BDD executando com sucesso