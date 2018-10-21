/// <reference types="Cypress" />

describe('api test', () => {
    it('post /api/login', () => {
        cy.request('POST', '/api/login', {name: 'john', pwd: '111'}).should((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property('message', 'success')
        })
        cy.request('POST', '/api/login', {name: 'john', pwd: '1111'}).should((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property('message', 'wrong')
        })
    })
    it('get /api/user/:uid', () => {
        var uid = 1
        cy.request('/api/user/' + uid).should((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property('uid', uid)
        })
    })
})