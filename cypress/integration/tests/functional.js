describe('Functional_cases', () => {

  context('1080p', () => {
     beforeEach(() => {
       // run these tests as if in a desktop
       // browser with a 720p monitor
       cy.viewport(1920, 1080)
       cy.visit('/123-pizza-roedermark/5')
     })

     // dat test useless
  it('qrcode_chek_ok_on_any_cat', () => {
    //on the main page
    cy.get('.qr-code').should('be.visible')
    cy.get('.qr-code').screenshot()
    cy.get('.qr-code').matchImageSnapshot();
    // Check QR for categories (lol it's not refreshed)
    for(let i = 24; i < 34; i++){
        cy.visit(`/123-pizza-roedermark/5/cat/${i}`)
        cy.get('.qr-code').should('be.visible')
        cy.get('.qr-code').matchImageSnapshot();
      }
  //   })

  it('buy_a_pizza', () => {
    //on the main page

    cy.visit(`/123-pizza-roedermark/5/cat/cat/26`)


    })
  })
})
