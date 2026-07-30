Feature: Checkout

  Scenario: Realizar checkout com usuário autenticado

    Given que o usuário está na página inicial
    When criar um usuário autenticado para checkout
    And adicionar um produto ao carrinho
    And acessar o carrinho
    And prosseguir para checkout
    Then deverá visualizar a página de checkout