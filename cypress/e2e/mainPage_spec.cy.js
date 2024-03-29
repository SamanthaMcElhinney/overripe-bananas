describe("Main Page", () => {
  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2movies", {
      fixture: 'movies.json'
    })
    cy.visit("http://localhost:3000")
  });
  it("should have a header with the title of the website", () => {
    cy.get("header")
      .should("exist")
      .get("h1")
      .should("have.text", "OVERRIPEBANANAS")
      .get(".headerImage")
      .should("have.length", 1);
  });
  it("should display all movies on the home page", () => {
    cy.get(".movies-container")
      .find(".movie")
      .should("have.length", 4);
  });
  it("should display the correct information in each movie card", () => {
    cy.get(".movie")
      .first()
      .within(() => {
        cy.get("img")
          .should(
            "have.attr",
            "src",
            "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"
          )
          .get(".movie-title")
          .should("have.text", "Black Adam");
        cy.get("img").should("have.attr", "alt", "Black Adam: Movie Poster");
        cy.get(".movie-release")
          .should("have.text", "Release Date: 10/18/2022")
      });
  })
  it("should display the correct movie rating in each card", () => {
    cy.get(".movie")
      .first()
      .within(() => {
        cy.get(".rating-container")
          .should("have.text", "Rating: 4")
      })
  })
  it("should display an image of a banana with the rating", () => {
    cy.get(".overripe-banana").should("have.length", 4);
  })
  it("should allow a user to click on a movie and navigate to the details page", () => {
    cy.get(".movie").first().click()
    cy.url().should("include", "/436270");
    cy.url().should("not.eq", "http://localhost:3000");
  })
  it("should display an error message if there's a server issue", () => {
    cy.intercept(
        "GET",
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
          statusCode: 400,
        }
      )
      .get(".error-handling")
      .should(
        "have.text",
        "Error: 400 Sorry we've slipped on a 🍌. We're working on getting back up and running"
      );
  });
  it("should allow a user to search for a movie", () => {
    cy.get('input[type="text"]')
      .type("the woman king")
      .should("have.value", "the woman king")
  })
  it("should search movies in a live search", () => {
    cy.get('input[name="movieTitle"]')
      .type("R.I.P.D.")
      .should("have.value", "R.I.P.D.")
  })
  it("should give an error message if there are no search results", () => {
    cy.get('input[name="movieTitle"').type("save the last dance")
    cy.get(".search-error-handling").should(
      "have.text",
      "No movies found. Please try again"
    );
  });
});