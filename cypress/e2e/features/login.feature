Feature: Login

  Scenario: Acessar a tela de login
    Given que o usuário está na página inicial
    When clicar no menu Signup / Login
    Then a tela de login deverá ser exibida