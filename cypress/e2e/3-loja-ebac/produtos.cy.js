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

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Argus All-Weather Tank'
       produtosPage.buscarProduto(produto) 
       cy.get('.product_title').should('contain', 'Argus All-Weather Tank')
    });

    it('Deve visitar a página do produtos', () => {
        
    });
    
    it('Deve adicionar produto ao carrinho', () => {
        
    });
});