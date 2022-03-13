git /// <reference types="cypress"/>


it('google test', function () {

    cy.visit('https://google.com')
    cy.get('.gLFyf').type('La ilaha Illalah Muhammadur Rasool Allah{enter}')
    cy.wait(3000)
    cy.contains("News").click()


})

it.only('New Login Test', function () {
    cy.visit('https://ui.freecrm.com/')
    cy.wait(2000)
    cy.get(':nth-child(1) > .ui > input').type('sameerahmed.in@gmail.com')
    cy.wait(2000)
    cy.get(':nth-child(2) > .ui > input').type('Etrade@123')
    cy.wait(2000)
    cy.get('.fluid').click()
    cy.get(':nth-child(4) > .fluid > .content > .header').should('be.visible').click()
    // cy.get('.comments').click()
    // cy.get('a > .ui').click()
    // cy.get('.labeled > input').type("Mr")
    // cy.get(':nth-child(1) > .ui > .react-datepicker-wrapper > .react-datepicker__input-container > .calendarField')
    // cy.get('.calendar').clickc()
    // cy.get(':nth-child(5) > .rbc-row-bg > :nth-child(4)').click()
    // cy.get('a > .ui').click





})