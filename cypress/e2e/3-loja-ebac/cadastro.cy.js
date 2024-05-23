/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o cadastro com sucesso', () => {
        const email = faker.internet.email();
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()
    });

});
