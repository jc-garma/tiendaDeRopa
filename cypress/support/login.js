//Custom Commands archivo (loque se repite en login)
Cypress.Commands.add('login', (email, password) => {
    cy.fixture('login.json').then((login) => {
        cy.get(login.loginLink).click();
        cy.get(login.searchButton).type(email);
        cy.get(login.password).type(password);
        cy.get(login.loginButton).click();
    })
})