/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
const { should } = require('chai');

describe('', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    it('Deve preencher formulário de pré-cadastro com sucesso', () => {

        // Preenche os campos do formulário com informações válidas 'faker'
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)


        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@1313')
        cy.get(':nth-child(4) > .button').click()

        // Cria nomes e senhas 'faker' para diversos teste
        cy.get('.woocommerce-MyAccount-navigation-link-edit--account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-button').click()
        cy.get('.woocommerce-button').should('contain', 'Detalhes da conta modificados com sucesso')

    });

});