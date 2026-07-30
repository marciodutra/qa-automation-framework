# QA Automation Framework

Framework de automação de testes desenvolvido com foco em boas práticas de mercado para automação Web, utilizando Cypress, Cucumber BDD e arquitetura Page Object Model.

O objetivo do projeto é construir um framework de automação escalável, organizado e próximo de uma estrutura utilizada em ambientes profissionais de QA.

---

# Objetivo

Construir uma base de automação contendo:

* Automação Web
* Testes BDD utilizando Gherkin
* Page Object Model (POM)
* Custom Commands
* Fixtures para massa de dados
* Testes de API
* Integração Contínua (CI/CD)
* Relatórios de execução

---

# Aplicação utilizada

Os testes automatizados são executados utilizando:

**Automation Exercise**

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
│   │       ├── register.feature
│   │       ├── products.feature
│   │       ├── cart.feature
│   │       ├── checkout.feature
│   │       └── payment.feature
│   │
│   ├── fixtures
│   │   └── users.json
│   │
│   ├── pages
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── ProductsPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   └── PaymentPage.js
│   │
│   └── support
│       │
│       ├── commands.js
│       ├── e2e.js
│       │
│       └── step_definitions
│           ├── common.js
│           ├── login.js
│           ├── register.js
│           ├── products.js
│           ├── cart.js
│           ├── checkout.js
│           └── payment.js
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

A arquitetura permite:

* Separação entre comportamento e implementação
* Maior reutilização de código
* Facilidade de manutenção
* Organização próxima de frameworks utilizados em projetos reais de QA

---

# Features

As funcionalidades são descritas utilizando linguagem Gherkin seguindo o padrão BDD.

Exemplo:

```gherkin
Scenario: Realizar cadastro de novo usuário

  Given que o usuário está na página inicial
  When acessar a tela de cadastro
  And preencher os dados iniciais de cadastro
  And preencher os dados da conta
  Then a conta deverá ser criada com sucesso
```

---

# Step Definitions

Responsáveis por conectar os cenários BDD com as ações automatizadas.

Arquivos atuais:

* common.js
* login.js
* register.js
* products.js
* cart.js
* checkout.js
* payment.js

O arquivo **common.js** concentra steps compartilhados entre diferentes funcionalidades, evitando duplicação de código.

---

# Page Object Model

A camada de Page Object centraliza os elementos e ações das páginas.

Páginas implementadas:

* LoginPage.js
* RegisterPage.js
* ProductsPage.js
* CartPage.js
* CheckoutPage.js
* PaymentPage.js

Responsabilidades:

* Localização dos elementos da página
* Execução das ações do usuário
* Validações específicas da tela

Benefícios:

* Menor duplicação de código
* Maior facilidade de manutenção
* Melhor organização dos testes
* Maior reutilização das ações

---

# Custom Commands

Comandos reutilizáveis ficam centralizados em:

```text
cypress/support/commands.js
```

Exemplo:

```javascript
cy.accessApplication();
```

Responsável por centralizar ações comuns utilizadas por diferentes cenários.

---

# Fixtures

Os dados utilizados nos testes ficam separados da implementação.

Arquivo atual:

```text
cypress/fixtures/users.json
```

Benefícios:

* Organização da massa de dados
* Reutilização
* Facilidade de manutenção
* Separação entre dados e lógica

---

# Cenários implementados

## Login

### Cenário

Acessar a tela de login.

Fluxo validado:

* Usuário acessa a página inicial.
* Usuário seleciona o menu **Signup / Login**.
* Sistema direciona para a tela de login.

**Status**

✅ Implementado

---

# Cadastro de usuário

## Cenário

Realizar cadastro completo de um novo usuário.

Fluxo validado:

* Usuário acessa a página inicial.
* Usuário acessa a tela de cadastro.
* Usuário informa nome e e-mail.
* Sistema apresenta a tela **Enter Account Information**.
* Usuário preenche os dados obrigatórios da conta.
* Usuário preenche os dados de endereço.
* Usuário cria a conta.
* Sistema apresenta a mensagem **Account Created!**
* Usuário continua para a aplicação.
* Sistema apresenta o usuário autenticado.
* Usuário realiza logout.

**Status**

✅ Implementado

---

# Produtos

## Cenário

Visualizar produtos disponíveis na página inicial.

Fluxo validado:

* Usuário acessa a página inicial.
* Sistema apresenta a seção de produtos.
* Sistema apresenta a lista de produtos disponíveis.

**Status**

✅ Implementado

---

## Adicionar produto ao carrinho

Fluxo validado:

* Usuário visualiza a lista de produtos.
* Usuário seleciona o primeiro produto disponível.
* Usuário adiciona o produto ao carrinho.
* Sistema apresenta confirmação de produto adicionado.

**Status**

✅ Implementado

---

# Carrinho

## Cenário

Adicionar produto e validar carrinho.

Fluxo validado:

* Usuário acessa a página inicial.
* Usuário adiciona um produto ao carrinho.
* Usuário acessa o carrinho.
* Sistema apresenta o produto adicionado.

**Status**

✅ Implementado

---

# Checkout

## Cenário

Realizar checkout com usuário autenticado.

Fluxo validado:

* Usuário adiciona produto ao carrinho.
* Usuário acessa o carrinho.
* Usuário seleciona **Proceed To Checkout**.
* Sistema apresenta a página de checkout.
* Sistema apresenta os dados de endereço.
* Sistema apresenta a revisão do pedido.

**Status**

✅ Implementado

---

# Pagamento

## Cenário

Finalizar pedido com pagamento.

Fluxo validado:

* Usuário acessa a tela de pagamento.
* Usuário informa nome no cartão.
* Usuário informa número do cartão.
* Usuário informa CVC.
* Usuário informa validade do cartão.
* Usuário confirma o pagamento.
* Sistema apresenta confirmação do pedido.

**Status**

✅ Implementado

---

# Como executar o projeto

## Instalar dependências

```bash
npm install
```

---

## Abrir Cypress

```bash
npm run cy:open
```

---

## Executar testes

```bash
npm run cy:run
```

---

# Evidências de execução

O framework está configurado para gerar automaticamente:

* Screenshots em caso de falha
* Vídeos das execuções

Arquivos gerados:

```text
cypress/screenshots

cypress/videos
```

---

# Resultado atual da execução

Última execução:

```text
Specs executadas: 6

Features:

✅ cart.feature
✅ checkout.feature
✅ login.feature
✅ payment.feature
✅ products.feature
✅ register.feature

Testes:

7 passando
0 falhando
```

Resultado:

| Feature                       | Status     |
| ----------------------------- | ---------- |
| Login                         | ✅ Passando |
| Cadastro de usuário           | ✅ Passando |
| Visualização de produtos      | ✅ Passando |
| Adicionar produto ao carrinho | ✅ Passando |
| Validar carrinho              | ✅ Passando |
| Checkout                      | ✅ Passando |
| Finalização de pedido         | ✅ Passando |

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
* [x] Cadastro completo de usuário
* [x] Validação de conta criada
* [x] Continuação após cadastro
* [x] Validação de usuário autenticado
* [x] Visualização de produtos
* [x] Adicionar produto ao carrinho
* [x] Acessar carrinho
* [x] Validar produto no carrinho
* [x] Checkout
* [x] Finalização de pedido

Próximas etapas:

* [ ] Login utilizando usuário cadastrado previamente
* [ ] Cenários negativos de login

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

## Relatórios

* [ ] Configuração Allure Report
* [ ] Geração de relatórios de execução

---

## CI/CD

* [ ] GitHub Actions
* [ ] Execução automática dos testes
* [ ] Pipeline de testes

---

# Status do projeto

**Em desenvolvimento** 🚀

## Entregas concluídas

* ✅ Projeto criado
* ✅ Cypress configurado
* ✅ Cucumber configurado
* ✅ Esbuild configurado
* ✅ Page Object Model
* ✅ Custom Commands
* ✅ Fixtures
* ✅ Cenário de acesso à tela de login
* ✅ Cadastro completo de usuário
* ✅ Validação de conta criada
* ✅ Continuação após cadastro
* ✅ Validação de usuário autenticado
* ✅ Visualização de produtos
* ✅ Adição de produto ao carrinho
* ✅ Acesso ao carrinho
* ✅ Validação do produto no carrinho
* ✅ Fluxo completo de checkout
* ✅ Fluxo completo de pagamento
* ✅ Finalização de pedido

---

# Próximas implementações

As próximas evoluções seguirão melhorias de qualidade e cobertura:

* Login utilizando usuário cadastrado previamente
* Cenários negativos de login
* Automação de API
* Relatórios Allure
* Integração CI/CD

---

# Autor

**Márcio Dutra**

Projeto desenvolvido para estudo, evolução técnica e demonstração de boas práticas em automação de testes.
