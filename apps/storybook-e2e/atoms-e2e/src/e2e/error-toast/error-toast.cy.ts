describe('atoms: ErrorToast component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=errortoast--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ErrorToast!');
    });
});
