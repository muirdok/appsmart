describe('Smoke cases for 720p', () => {

  context('720p resolution', () => {
     beforeEach(() => {
       // run these tests as if in a desktop
       // browser with a 720p monitor
       cy.viewport(1280, 720)
     })

  it('Open site and check title', () => {
    cy.visit('https://hermes-dev.devteam.win/123-pizza-roedermark/5')
//.chef disappears
    cy.get('.chef').should('not.be.visible')
//Check title
    cy.title().should('eq', '123 Pizzeria GmbH, Rödermark | Home')
//Check application title
    cy.contains('Nutze unsere App!').should('be.visible')
//Check qr_code
    cy.get('.qr-code').screenshot()

    })

  })
})
