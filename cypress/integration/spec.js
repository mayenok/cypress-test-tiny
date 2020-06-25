/// <reference types="cypress" />
describe('color-input', () => {
    it('opens color palette', () => {
        cy.visit('http://color-input.mayenok.com')
            .get('input')
            .click();
        // color palette does not appear
        // however it appears after manual click
    })
})
