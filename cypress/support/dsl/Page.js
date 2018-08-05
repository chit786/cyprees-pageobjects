export default class Page {

    constructor(){

    }

    static navigateTo(url) {
        cy.visit(url);
    }
}