describe('Search elements', () =>{
    beforeEach(() => {
        cy.visit('/products'); //Sitio donde visitar
    })
    it('search for elements with multiple results', () =>{
        cy.search('dress');
        cy.fixture('searchResult.json').then((searchResult) => {
            cy.get(searchResult.banner).should('contain','Searched Products');
        })

    })
    it('search for elements with no results', () => {
        cy.search('qwerty');
        cy.fixture('searchResult.json').then((searchResult) => {
            cy.get(searchResult.banner).should('contain','Searched Products');
        })

    })
})