/// <reference types="cypress" />

import produtosPage from "../../support/pege-objects/produtos.page";

describe('Funcionalidade: produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Argus All-Weather Tank'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', 'Argus All-Weather Tank')
    });

    it('Deve visitar a página do produtos', () => {
        produtosPage.visitarProduto('ariel roll sleeve sweatshirt')
        cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Prima Compete Bra Top')
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Prima Compete Bra Top” foram adicionados no seu carrinho.')

    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
    });
});