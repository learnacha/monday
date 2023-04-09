describe('atoms: SignupHero component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=signuphero--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SignupHero!');
    });
});
