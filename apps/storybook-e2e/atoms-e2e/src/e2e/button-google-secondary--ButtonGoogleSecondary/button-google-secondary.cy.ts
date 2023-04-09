describe('atoms: ButtonGoogleSecondary component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttongooglesecondary--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ButtonGoogleSecondary!');
    });
});
