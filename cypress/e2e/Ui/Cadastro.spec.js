/// <reference types="cypress" />
const dinamicEmail = require('faker-br')

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar')
    });

    
    it('Deve fazer o cadastro de um novo usuário com sucesso', () => {
        var name = dinamicFields.name.firstName()
        var email = dinamicFields.internet.email()
        var senha = dinamicFields.random.uuid()
        cy.createAccount(name, email, senha, senha)

        cy.get('.large').should('contain', 'Dashboard')
        
    });

});

    /* 
        Antes de Tudo
        before

        Antes de cada cenário
        beforeEach

        Depois de Tudo
        after

        Depois de cada cenário
        afterEach
    */