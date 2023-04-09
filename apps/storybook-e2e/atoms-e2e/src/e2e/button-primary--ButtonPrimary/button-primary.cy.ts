describe('atoms: ButtonPrimary component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttonprimary--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ButtonPrimary!');
    });
});
