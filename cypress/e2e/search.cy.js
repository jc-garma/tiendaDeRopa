describe('Search elements', () =>{
    beforeEach(() => {
        cy.visit('/products'); //Sitio donde visitar
    })
    it('search for elements with multiple results', () =>{
        cy.fixture('index.json').then((index) => {
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult.json').then((searchResult) => {
            cy.get(searchResult.banner).should('contain','Searched Products');
        })

    })
    it('search for elements with no results', () => {
        cy.fixture('index.json').then((index) => {
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult.json').then((searchResult) => {
            cy.get(searchResult.banner).should('contain','Searched Products');
        })

    })
})