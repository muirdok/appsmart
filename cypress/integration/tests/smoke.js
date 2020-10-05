
/* eslint-disable no-undef */
/// <reference types="cypress" />


describe('Smoke cases for 1080p', () => {

  context('1080 resolution', () => {
     beforeEach(() => {
       // run these tests as if in a desktop
       // browser with a 720p monitor
       cy.viewport(1920, 1080)
     })

  it('Open site and check title', () => {
    cy.visit('/123-pizza-roedermark/5')
//.chef disappears
    cy.get('.chef').should('not.be.visible')

//Check title
    cy.title().should('eq', '123 Pizzeria GmbH, Rödermark | Home')

//Check application title
    cy.contains('Nutze unsere App!').should('be.visible')

    cy.get('.qr-code').should('be.visible')

    })
  })
})
