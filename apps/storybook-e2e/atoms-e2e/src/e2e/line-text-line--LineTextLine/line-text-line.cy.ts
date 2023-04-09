describe('atoms: LineTextLine component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=linetextline--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LineTextLine!');
    });
});
