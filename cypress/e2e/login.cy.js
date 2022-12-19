describe('Login', () => {
    beforeEach(() => {
        cy.visit('/products'); //Sitio donde visitar
    })
    it('login with incorrect email', () =>{
        cy.login('something', 'other');
        /*cy.fixture('login.json').then((loginResult) => {
            cy.get(loginResult.incorrectLoginBanner).should('contain','Incluye un signo "@"');
        })*/
    })
})