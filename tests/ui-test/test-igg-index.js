/// <reference types="Cypress" />

describe('ui test',()=>{
    it('visit igg',()=>{
        cy.viewport('macbook-15')
        cy.visit('https://www.igg.com/')
        cy.get('a.Sign-in').click()
        cy.get('dd.opfIggLogin a').click()
    })
})
