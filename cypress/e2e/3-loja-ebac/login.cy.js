/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => { 
        cy.get('#username').type('Du.teste')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, du.teste (não é du.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
        cy.get('#username').type('D.teste')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagen de erro ao inserir senha invalida', () => {
        cy.get('#username').type('Du.teste')
        cy.get('#password').type('!@#$%')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha informada para o usuário Du.teste está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });
})
