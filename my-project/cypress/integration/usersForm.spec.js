/* eslint-disable no-undef */
describe('Form inputs', () => {
    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })

    it('button is disabled', () => {
        cy.get('button.submit')
            .should('be.disabled')
    })

    it('can type a first name', () => {
        cy.get('input[name="first_name"]')
            .type('Virginia')
            .should('have.value', 'Virginia')
    })

    it('can type a last name', () => {
        cy.get('input[name="last_name"]')
            .type('Davenport')
            .should('have.value', 'Davenport')
    })

    it('can type an email', () => {
        cy.get('input[name="email"]')
            .type('virginia@virginia.com')
            .should('have.value', 'virginia@virginia.com')

    })

    it('can type a password', () => {
        cy.get('input[name="password"]')
            .type('123456789')
            .should('have.value', '123456789')
    })

    it('can check terms', () => {
        cy.get('input[name="termsOfService"]')
            .click()
    })
    it('submit is free button!', () => {
        cy.get('button.submit')
            .should('not.be.disabled')
    })

})

describe('wont submit with missing field', () => {
    it('wont validate when email is missing', () => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="first_name"]').type('Ashley')
        cy.get('input[name="last_name"]').type('Smith')
        
        cy.get('input[name="password"]').type('abcdefgh')
        cy.get('input[name="termsOfService"]').click()

        cy.get('button.submit').should('be.disabled')

    })
})

describe('Submit a user', () =>{
    it('can submit a user', () => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="first_name"]').type('Ashley')
        cy.get('input[name="last_name"]').type('Smith')
        cy.get('input[name="email"]').type('smith@smith.com')
        cy.get('input[name="password"]').type('abcdefgh')
        cy.get('input[name="termsOfService"]').click()

        cy.get('button.submit').click()

    })
})