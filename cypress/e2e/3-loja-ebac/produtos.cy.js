/// <reference types="cypress" />

describe('Funcionalidade: produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.lest()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

            cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });
});