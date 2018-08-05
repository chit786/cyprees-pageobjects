export default class SignInPage{
    constructor(){
        cy.get("#login_field").should('be.visible');
    }

    static isVisible() {
        cy.get("#login_field").should('be.visible');
    };
}