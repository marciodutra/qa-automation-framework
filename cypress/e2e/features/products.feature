Feature: Produtos

  Scenario: Visualizar produtos disponíveis na página inicial
    Given que o usuário está na página inicial
    Then deverá visualizar a lista de produtos


  Scenario: Adicionar produto ao carrinho
    Given que o usuário está na página inicial
    When adicionar um produto ao carrinho