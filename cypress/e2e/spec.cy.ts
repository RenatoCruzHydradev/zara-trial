describe('Test whole app', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get("input").type("Joe")

    cy.get(".counter").should('contain.text', "1")
    
    cy.get("input").type("Joexxxxx")
    cy.get(".counter").should('contain.text', "0")
    
    cy.get("input").clear()
    cy.get("input").type("Joe")

    cy.get(".podcast-list").should('have.length', "1")
  })

  it('Visits the podcast project page', () => {
    cy.visit('/')

    cy.get(".podcast-list").get(".podcast").first().click()
    
    cy.wait(2000)

    cy.get(".title").should('contain.text', "Episodes")

  })

  it('Visits the podcast epdisode page', () => {
    cy.visit('/podcast/1535809341/episode/1000600305730')
    
    cy.wait(2000)


  })
})
