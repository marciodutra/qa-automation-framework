Feature: Cadastro de usuário

  Scenario: Realizar cadastro de novo usuário
    Given que o usuário está na página inicial
    When acessar a tela de cadastro
    And preencher os dados iniciais de cadastro
    And preencher os dados da conta
    Then a conta deverá ser criada com sucesso