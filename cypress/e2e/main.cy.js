describe('empty spec', () => {
  beforeEach('', () => {
    cy.visit('http://localhost:3000')
  })

  it('should have a header', () => {
    cy.get('.app-head')
    .should('exist')
  })

  it('should have an All Words button', () => {
    cy.get('.goHome')
    .should('exist')
  })

  it('should have a Saved Words button', () => {
    cy.get('.goToSaved')
    .should('exist')
  })

  it('should have a word input box', () => {
    cy.get('input')
    .should('exist')
  })

  it('should have a card container', () => {
    cy.get('.tile-container')
    .should('exist')
  })

  it('should start with tiles for "hi" and "friend"', () => {
    cy.get('.tile-container')
    .get('.tile-container > :nth-child(1)')
    .should('exist')
    .contains('hi')
    cy.get('.tile-container > :nth-child(2)')
    .should('exist')
    .contains('friend')
  })

  it('should be able to create new tiles', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('test')
    cy.get('.input-form > button').click()
    .wait(1000)
    cy.get('.tile-container > :nth-child(3)')
    .should('exist')
    .contains('test')
  })

  it('should be able to remove tiles', () => {
    cy.get('.tile-container > :nth-child(2)')
    .should('exist')
    .contains('friend')
    cy.get(':nth-child(2) > .buttons > .removeButton').click()
    cy.get('.tile-container > :nth-child(2)')
    .should('not.exist')
  })

  it('should be able to go to the Saved Words screen', () => {
    cy.url()
      .should('be.equal', 'http://localhost:3000/')
    cy.get('.goToSaved').click()
    cy.url()
      .should('be.equal', 'http://localhost:3000/savedPage')
  })

  it('should be able to go back to the All Words screen from the Saved Words screen', () => {
    cy.url()
      .should('be.equal', 'http://localhost:3000/')
    cy.get('.goToSaved').click()
    cy.url()
      .should('be.equal', 'http://localhost:3000/savedPage')
    cy.get('.goHome').click()
    cy.url()
      .should('be.equal', 'http://localhost:3000/')
  })

  it('should be able to save tiles, and see them on the Saved Words screen', () => {
    cy.get(':nth-child(1) > .buttons > .saveButton').click()
    .wait(1000)
    cy.get('.goToSaved').click()
    .wait(1000)
    cy.get('.tile-container > :nth-child(1)')
    .should('exist')
    .contains('hi')
  })

  it('should have a footer', () => {
    cy.get('footer')
    .should('exist')
  })


})