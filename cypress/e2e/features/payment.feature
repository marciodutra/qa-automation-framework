Feature: Pagamento


Scenario: Finalizar pedido com pagamento

    Given que o usuário está na página inicial
    When criar um usuário autenticado para checkout
    And adicionar um produto ao carrinho
    And acessar o carrinho
    And prosseguir para checkout
    And clicar em Place Order
    Then a tela de pagamento deverá ser exibida
    When preencher os dados do pagamento
    And confirmar o pagamento
    Then o pedido deverá ser finalizado com sucesso