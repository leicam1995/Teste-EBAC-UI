/// <reference types="cypress" />

context('Funcionalidade de login', () => {

    beforeEach(() => {
        // Acessa a página de login
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        screenshot()
    });

    it('Deve fazer login com sucesso', () => {


        // Insere os detalhes reais do usuário e senha nos campos correspondentes
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')

        // Clica no botão de login
        cy.get('.woocommerce-form > .button').click()

        // Verifica se o usuário foi redirecionado para a página após o login
        cy.get('pege-title').should('contain', 'Minha conta')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {

        // Insere credencial inválida no campo correspondente
        cy.get('#username').type('usuario_invalido')
        cy.get('#password').type('teste@teste.com')

        // Clica no botão de login
        cy.get('.woocommerce-form > .button').click()

        // Verifica se a mensagem de erro é exibida
        cy.get('.woocommerce-error').should('contain', 'e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {

        // Insere credencial inválida no campo correspondente
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senha_invalida')

        // Clica no botão de login
        cy.get('.woocommerce-form > .button').click()

        // Verifica se a mensagem de erro é exibida
        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
    })
})