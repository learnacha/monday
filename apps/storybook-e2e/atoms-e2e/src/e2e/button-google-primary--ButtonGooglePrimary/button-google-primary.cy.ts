describe('atoms: ButtonGooglePrimary component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttongoogleprimary--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ButtonGooglePrimary!');
    });
});
