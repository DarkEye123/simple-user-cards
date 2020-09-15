// BE is made to be quite unstable so tactic for testing so I used flag for mock stability
context('example app test suite', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  });

  it('can see placeholder cards', () => {
    const placeholders = cy
      .get('div[data-testid="user-grid"]')
      .children('.media-block');
    placeholders.should('have.length', 6);
  });

  it('can see user cards', () => {
    const userCards = cy
      .get('div[data-testid="user-grid"]')
      .children('div[data-testid="user-card"]');
    userCards.should('have.length', 6);
  });

  it('can delete user card', () => {
    const userCards = cy.get('div[data-testid="user-card"]');
    userCards.should('have.length', 6);
    userCards.get('.fa-trash').first().click();
    cy.get('div[data-testid="user-card"]').should('have.length', 5);
  });

  it('can edit user card', () => {
    cy.get('.fa-user-edit').first().click();
    const formModal = cy.get('.ReactModalPortal').find('form');
    formModal.within(() => {
      cy.get('input').first().clear().type('test');
      cy.get('input').eq(1).clear().type('tester');
      cy.get('button').first().click();
    });
    cy.get('div[data-testid="user-card"]')
      .first()
      .find('span')
      .first()
      .should('have.text', 'test tester');
  });
});
