/// <reference types="cypress" />

const { contains } = require("cypress/types/jquery");
const { first } = require("cypress/types/lodash");

describe('Funcionalidade da página de produtos', () => {

    beforeEach(() => {
        // Assume que o login é bem-sucedido e navega para a página de produtos
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.click()
        //.eq(3)
        contains('Ariel Roll Sleeve Sweatshirt').click()

    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

    


        cy.get('[class="product-block grid"]')
        contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-Purple').click()
        cy.get('input-text').clear.type(quantidade)
        cy.get('.single_add_to_card_button').click()
        cy.get('.dropdown-toggle > .nime-card-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' x "Ariel Roll Sleeve Sweatshirt')



    });


});