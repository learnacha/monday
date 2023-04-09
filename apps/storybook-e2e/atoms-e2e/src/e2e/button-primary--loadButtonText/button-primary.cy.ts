describe('atoms: loadButtonText component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=loadbuttontext--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to loadButtonText!');
    });
});
