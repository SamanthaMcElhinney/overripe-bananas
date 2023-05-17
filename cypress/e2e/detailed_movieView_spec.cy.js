// describe('Detailed Movie Card', () => {
//   beforeEach(()=> {
//      cy.intercept("GET","https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
//         fixture: "/singleMovie.json",
//        });
//   cy.visit("http://localhost:3001/436270");
//   })
//    it("should have a header with the title of the website", () => {
//      cy.get("header")
//        .should("exist")
//        .get("h1")
//        .should("have.text", "OVERRIPEBANANAS")
//        .get(".headerImage")
//        .should("have.length", 1);
//    });
//    it("should display the movie details for the selected movie", () => {
//     cy.get(".movie-container").find("overlay").should(
//       "have.attr",
//       "src",
//       "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
//     );
//    })
// })