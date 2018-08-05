import Page from "../support/dsl/Page";
import LandingPage from '../support/dsl/LandingPage';
import SignInPage from '../support/dsl/SignInPage';


describe("Github Page Navigation", () => {
    it("should show landing page", () => {
        Page.navigateTo("/");
        LandingPage
            .signUpShouldBeVisible()
            .clickSignInLink("a", "Sign in");
    });

    it("should show signin page", () => {
        // Page.navigateTo("https://github.com/signin");
        Page.navigateTo("/");
        SignInPage.isVisible();
    });
});