/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(log => {
            cy.login(log.usuario, log.senha)
        })
    });
    it('Deve completar detalhes da conta com sucesso', () => {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.detalhesConta('Eduardo', 'Maciel', 'Edu.QA')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});
