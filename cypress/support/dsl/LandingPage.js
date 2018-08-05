import SignInPage from "./SignInPage";

export default class LandingPage {

    constructor () {

    }

    static signUpShouldBeVisible(){
        cy.get(".btn-primary").should('have.length',1);
        return this;
    }

    static clickSignInLink(){
        cy.get('a').contains("Sign in").click();
        return new SignInPage();
    }
}