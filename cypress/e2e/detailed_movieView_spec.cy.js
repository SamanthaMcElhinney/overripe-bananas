describe('Detailed Movie Card', () => {
    beforeEach(() => {
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
            fixture: "/singleMovie.json",
        });
        cy.visit("http://localhost:3000/movies/436270");
    });
    it("should have a header with the title of the website", () => {
        cy.get("header")
            .should("exist")
            .get("h1")
            .should("have.text", "OVERRIPEBANANAS")
            .get(".headerImage")
            .should("have.length", 1);
    });
    it("should have a button to return to the main page", () => {
        cy.get(".home-button").click().url().should('include', '/')
    })
    it("should display movie details for a selected movie", () => {
        cy.get(".content");
        cy.contains("Black Adam");
        cy.contains("The world needed a hero. It got Black Adam.");
        cy.contains(
            "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
        );
        cy.get('.stats')
        cy.contains("Revenue:").should("have.text", "Revenue: $384,571,691");
        cy.contains("Budget:").should(
          "have.text",'Budget: $200,000,000'
        );
    });
    //    it("should display the movie details for the selected movie", () => {
    //     cy.get(".opacity").find(".ind-card")
    //       .should(
    //         "have.attr",
    //         "src",
    //         "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
    //       );
    //    });
})