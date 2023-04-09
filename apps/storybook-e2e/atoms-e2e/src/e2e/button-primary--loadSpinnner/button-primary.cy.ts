describe('atoms: loadSpinnner component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=loadspinnner--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to loadSpinnner!');
    });
});
