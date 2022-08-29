/// <reference types="cypress" />
const dinamicFields = require('faker-br')

describe('Funcionalidade: Perfil', () => {
    
    beforeEach(() => {
        var name = dinamicFields.internet.userName()
        var email = dinamicFields.internet.email()
        var senha = dinamicFields.internet.password()
        cy.visit('cadastrar')
        cy.createAccount(name, email, senha, senha)
    });

    it('Deve realizar a criação de um perfil com sucesso utilizando todos os campos', () => {

        var status = 'QAE Júnior'
        var company = dinamicFields.company.companyName()
        var website = dinamicFields.internet.url()
        var localization = dinamicFields.address.city() + ' - ' + dinamicFields.address.stateAbbr()
        var skills = dinamicFields.lorem.sentence()
        var gitHubUser = dinamicFields.internet.userName()
        var biography = dinamicFields.lorem.sentence()
        var twitterURL = dinamicFields.internet.url()
        var facebookURL = dinamicFields.internet.url()
        var youtubeURL = dinamicFields.internet.url()
        var linkedinURL = dinamicFields.internet.url()
        var instagramURL = dinamicFields.internet.url()
        var mediumURL = dinamicFields.internet.url()

        
        cy.profile(status, company, website, localization, skills, gitHubUser, biography, 
            twitterURL, facebookURL, youtubeURL, linkedinURL, instagramURL, mediumURL)

        cy.get('[data-test="dashboard-editProfile"]').should('exist')
        cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')
        
    });

    it('Deve realizar a criação de um perfil com sucesso utilizando apenas os campos obrigatórios', () => {

        var status = 'QAE Júnior'
        var company = '{backspace}'
        var website = '{backspace}'
        var localization = '{backspace}'
        var skills = dinamicFields.lorem.sentence()
        var gitHubUser = '{backspace}'
        var biography = '{backspace}'
        var twitterURL = '{backspace}'
        var facebookURL = '{backspace}'
        var youtubeURL = '{backspace}'
        var linkedinURL = '{backspace}'
        var instagramURL = '{backspace}'
        var mediumURL = '{backspace}'

        cy.profile(status, company, website, localization, skills, gitHubUser, biography, 
            twitterURL, facebookURL, youtubeURL, linkedinURL, instagramURL, mediumURL)

        cy.get('[data-test="dashboard-editProfile"]').should('exist')
        cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')
        
    });

    it('Validar campos obrigatórios ao tentar criar um perfil sem o preenchimento dos mesmos', () => {

        var status = '{backspace}'
        var company = dinamicFields.company.companyName()
        var website = dinamicFields.internet.url()
        var localization = dinamicFields.address.city() + ' - ' + dinamicFields.address.stateAbbr()
        var skills = '{backspace}'
        var gitHubUser = dinamicFields.internet.userName()
        var biography = dinamicFields.lorem.sentence()
        var twitterURL = dinamicFields.internet.url()
        var facebookURL = dinamicFields.internet.url()
        var youtubeURL = dinamicFields.internet.url()
        var linkedinURL = dinamicFields.internet.url()
        var instagramURL = dinamicFields.internet.url()
        var mediumURL = dinamicFields.internet.url()

        
        cy.profile(status, company, website, localization, skills, gitHubUser, biography, 
            twitterURL, facebookURL, youtubeURL, linkedinURL, instagramURL, mediumURL)

        cy.get('.MuiFormLabel-root.Mui-error').should('have.css', 'color', 'rgb(244, 67, 54)')
        cy.get('.MuiFormHelperText-root').should('exist')
        cy.get('.MuiFormHelperText-root').should('contain.text', 'Conhecimentos é obrigatório')

    });

});