class produtosPege {

    visitarUrl() {
        cy.visit('/produtos/')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block')
        .contains(nomeProduto)
        .click()

    }

    visitarProduto() {

    }

    addProdutoCarrinho() {

    }
}

export default new produtosPege()