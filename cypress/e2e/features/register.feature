Feature: Cadastro de usuário

  Scenario: Realizar cadastro de novo usuário
    Given que o usuário está na página inicial
    When acessar a tela de cadastro
    And preencher os dados iniciais de cadastro
    Then a tela de criação de conta deverá ser exibida