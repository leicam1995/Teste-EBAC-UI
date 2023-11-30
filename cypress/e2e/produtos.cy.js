/// <reference types="cypress" />

const { contains } = require("cypress/types/jquery");
const { first } = require("cypress/types/lodash");

describe('Funcionalidade da página de produtos', () => {

    beforeEach(() => {
        // Assume que o login é bem-sucedido e navega para a página de produtos
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    // Testa a seleção de um produto da lista
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.click()
        //.eq(3)
        contains('Ariel Roll Sleeve Sweatshirt').click()
    });

    // Testa a adição de um produto ao carrinho
    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        // Localiza o bloco de produtos e seleciona um produto específico
        cy.get('[class="product-block grid"]')
        contains('Ariel Roll Sleeve Sweatshirt').click()

        // Seleciona opções de tamanho e cor
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-Purple').click()

        // Insere a quantidade desejada e adiciona ao carrinho
        cy.get('input-text').clear.type(quantidade)
        cy.get('.single_add_to_card_button').click()

        // Verifica se o carrinho reflete corretamente a adição
        cy.get('.dropdown-toggle > .nime-card-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' x "Ariel Roll Sleeve Sweatshirt')

    });
});