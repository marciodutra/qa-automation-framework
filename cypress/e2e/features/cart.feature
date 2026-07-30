Feature: Carrinho

  Scenario: Adicionar produto e validar carrinho

    Given que o usuário está na página inicial
    When adicionar um produto ao carrinho
    And acessar o carrinho
    Then deverá visualizar o produto no carrinho