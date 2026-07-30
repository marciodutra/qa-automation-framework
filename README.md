# QA Automation Framework

Framework de automação de testes desenvolvido com foco em boas práticas de mercado para automação Web, utilizando Cypress, Cucumber BDD e arquitetura Page Object Model.

O objetivo do projeto é construir um framework de automação escalável, organizado e próximo de uma estrutura utilizada em ambientes profissionais de QA.

---

# Objetivo

Construir uma base de automação contendo:

* Automação Web
* Testes BDD utilizando Gherkin
* Page Object Model
* Custom Commands
* Fixtures para massa de dados
* Testes de API
* Integração contínua (CI/CD)

---

# Aplicação utilizada

Os testes automatizados são executados utilizando:

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
│   │       ├── login.feature
│   │       └── register.feature
│   │
│   ├── fixtures
│   │   └── users.json
│   │
│   ├── pages
│   │   ├── LoginPage.js
│   │   └── RegisterPage.js
│   │
│   └── support
│       │
│       ├── commands.js
│       ├── e2e.js
│       │
│       └── step_definitions
│           ├── common.js
│           ├── login.js
│           └── register.js
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

# Arquitetura do Framework

O projeto utiliza uma separação de responsabilidades seguindo o padrão:

```text
Feature
   ↓
Step Definition
   ↓
Page Object
   ↓
Custom Commands
   ↓
Fixtures
   ↓
Cypress
```

## Feature

Responsável pela descrição dos cenários utilizando linguagem Gherkin.

Exemplo:

```gherkin
Scenario: Realizar cadastro de novo usuário
  Given que o usuário está na página inicial
  When acessar a tela de cadastro
  Then a conta deverá ser criada com sucesso
```

---

## Step Definitions

Responsáveis por conectar os cenários BDD com as ações automatizadas.

Exemplo:

* login.js
* register.js
* common.js

O arquivo `common.js` contém steps compartilhados entre diferentes funcionalidades.

---

## Page Object Model

A camada de Page Object centraliza os elementos e ações das páginas.

Exemplo:

```text
LoginPage.js
RegisterPage.js
```

Benefícios:

* Menor duplicação de código
* Maior facilidade de manutenção
* Melhor organização dos testes

---

## Custom Commands

Comandos reutilizáveis ficam centralizados em:

```text
cypress/support/commands.js
```

Exemplo:

```javascript
cy.accessApplication();
```

---

## Fixtures

Dados utilizados nos testes ficam separados do código:

```text
cypress/fixtures/users.json
```

Benefícios:

* Organização da massa de dados
* Facilidade para manutenção
* Reutilização entre cenários

---

# Cenários implementados

## Login

### Cenário:

Acessar a tela de login

Fluxo validado:

* Usuário acessa a página inicial.
* Usuário seleciona o menu "Signup / Login".
* Sistema direciona para a tela de login.

Status:

✅ Implementado

---

## Cadastro de usuário

### Cenário:

Realizar cadastro de novo usuário

Fluxo implementado:

* Usuário acessa a página inicial.
* Usuário acessa a tela de cadastro.
* Sistema inicia o processo de criação de usuário.

Status:

✅ Estrutura implementada

🚧 Cadastro completo em desenvolvimento

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

* Screenshots em caso de falha
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

## Arquitetura

* [x] Page Object Model
* [x] Custom Commands
* [x] Fixtures
* [x] Steps compartilhados

---

## Automação Web

* [x] Primeiro cenário BDD
* [x] Acesso à tela de login
* [x] Estrutura de cadastro de usuário
* [ ] Cadastro completo de usuário
* [ ] Login utilizando usuário criado
* [ ] Validação de usuário autenticado
* [ ] Cenários negativos de login
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
* ✅ Primeiro cenário BDD
* ✅ Page Object Model
* ✅ Custom Commands
* ✅ Fixtures
* ✅ Estrutura de cadastro de usuário

---

# Autor

Márcio Dutra

Projeto desenvolvido para estudo, evolução técnica e demonstração de boas práticas em automação de testes.
