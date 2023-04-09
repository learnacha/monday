describe('atoms: ButtonSecondary component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttonsecondary--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ButtonSecondary!');
    });
});
