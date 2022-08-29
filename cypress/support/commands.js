// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, senha) => { 
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add("socialMedia", (twitterURL, facebookURL, youtubeURL, linkedinURL, instagramURL, mediumURL) => { 
    cy.get('[data-test="profile-socials"]').click()
    cy.get('[data-test="profile-twitter"] > .MuiInputBase-root > .MuiInputBase-input').type(twitterURL)
    cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type(facebookURL)
    cy.get('[data-test="profile-youtube"] > .MuiInputBase-root > .MuiInputBase-input').type(youtubeURL)
    cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type(linkedinURL)
    cy.get('[data-test="profile-instagram"] > .MuiInputBase-root > .MuiInputBase-input').type(instagramURL)
    cy.get('[data-test="profile-medium"] > .MuiInputBase-root > .MuiInputBase-input').type(mediumURL)
})

Cypress.Commands.add("profile", (status, company, website, localization, skills, gitHubUser, biography, twitterURL, facebookURL, youtubeURL, linkedinURL, instagramURL, mediumURL) => { 
    cy.get('[data-test="dashboard-createProfile"]').click()
    if (status !== '{backspace}') { 
        cy.get('#mui-component-select-status').click()
        cy.contains(status).click()
    }
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(company)
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(website)
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(localization)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(skills)
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(gitHubUser)
    cy.get('[rows="1"]').type(biography)
    cy.socialMedia(twitterURL, facebookURL, youtubeURL, linkedinURL, instagramURL, mediumURL)
    cy.get('[data-test="profile-submit"]').click()
})

Cypress.Commands.add("createAccount", (name, email, senha, confirmed) => {
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(confirmed)
    cy.get('[data-test="register-submit"]').click()
})

Cypress.Commands.add("deleteAccount",() => {
    cy.get('[data-test="dashboard-deleteProfile"]').click()
})