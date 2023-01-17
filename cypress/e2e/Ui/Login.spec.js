/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    it.only('Deve fazer login com sucesso', () => {
        
        cy.login('caio@bootcamp.com','135Caio246#')

        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
        
    });

    it('Validar mensagem de erro quando inserir usuário inválido', () => {

        cy.login('jjjjjjjj','135Caio246#')

        cy.get('.MuiFormHelperText-root').should('contain', 'Digite um email que seja válido')
    });

    it('Validar mensagem de erro quando inserir usuário válido e senha de tamanho menor que 6 caracteres', () => {
        
        cy.login('jjjjjjjj','135#')

        cy.get('.MuiFormHelperText-root').should('contain', 'A senha deve conter no mínimo 6 caracteres')
    });

    it('Validar mensagem de erro quando inserir usuário válido e senha inválida', () => {

        cy.login('caio@bootcamp.com','555EsterEgg555#')

        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });
    
});

/*
    Funcionalidade: Login
    Eu como usuário da Conexão QA
    Quero fazer o login
    Para editar meu perfil

    Cenário: Login com sucesso
    Arrange - Dado - Pré-requisito
    Action - Quando - Ação do usuário
    Assert - Então - Resultado esperado

    Dado: que eu esteja na tela de login
    Quando: eu inserir o usuário e senha
    Então: deve me direcionar para o Dashboard


    Cenário: Validar mensagem de erro

    
    Cenário: Recuperar senha

*/