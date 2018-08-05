xdescribe("search duchduck go", () => {
    it('should search', () => {
        cy
            .visit("https://duckduckgo.com/")
            .get("#search_form_input_homepage")
            .type("Google", {force: true});
    });
});