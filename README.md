## About
Overripe Bananas is a web-based application designed to allow users to view an array of movies that display the movie poster, title, rating, and release date. The user can also search for a movie using the search input form. A user can obtain more details for each movie by clicking on the movie card in the carousel. This will then bring a user to the movie detail page. 

---

## Set Up 

### Installing the files
 - Fork this [repository](https://github.com/SamanthaMcElhinney/overripe-bananas.git) to your GitHub account. 
 - In your forked respository, click the `code` drop-down menu and copy the SSH key.
 - On your local machine, open the terminal and navigate to the location you'd like the repository directory cloned to. 
 - Once you're there, run `git clone [SSH Key] [travel-tracker]` via the command line.
 - Run `npm install`. 

### Opening the application
 - When you're ready to use the app, open the terminal and navigate to the overripe-bananas directory via the terminal.
 - In the terminal, use command+t to open a new terminal tab. 
 - In the new terminal tab, run `npm start`.
 - Once WebPack has compiled the necessary resources, you will see a link within the text of your terminal. You can copy and paste that link into your browser to access a locally-hosted version of this application on your machine. 

## Deployed Page
- [Deployed Link](https://overripe-bananas.vercel.app/)
---

## Preview

![Overripe_bananas](https://github.com/SamanthaMcElhinney/overripe-bananas/assets/117230717/6964f2d0-69f4-4945-89d4-c1c39a9ffc8e)

---

## Contributors

Dustin Gouner  [GitHub](https://github.com/dustingouner) | [LinkedIn](https://www.linkedin.com/in/dustin-gouner/) <br>
Samantha McElhinney [GitHub](https://github.com/samanthamcelhinney) | [LinkedIn](https://www.linkedin.com/in/samantha-mcelhinney/)

---

## Context
This was our first paired project during Mod 3 at [Turing School of Software and Design Front End Web Development program](https://frontend.turing.edu/), a four- module, seven-month course focused on preparing students for a career as web developers working with Javascript, HTML, CSS, and the React framework. The application was built over the course of nine days and took roughly 35 hours to complete. 

---

## Technologies/ Metholodologies
- React & React Router
- End to end testing using Cypress
- Fetch API
- Git/GitHub/ GitHub project board
- Javascript/ CSS/ HTML
- Error handling for network and user errors
- Data validation with PropTypes
- Utilizing Agile/ Scrum project management
- Develop user stories and with acceptance criteria 
- Responsive design

## Goals and Challenges 
- In our first React project, we aimed to gain competency with React fundamentals and create a multi-page UX using Router. We successfully completed all project iterations, which included adding search functionality and ensuring a responsive design for various screen sizes.
- incorporating accessibility features with app 100% accessible via lighthouse audit to ensure a more inclusive user experience.
- We faced a learning curve for correctly implementing routes to navigate between different pages and ensuring the appropriate display of movie details when returning to the home page.
- Challenges in handling asynchronous code, including managing data flow and ensuring correct execution order.
- Overcoming the learning curve associated with Cypress testing, while ensuring comprehensive test coverage for various user interactions.

## Future Development Opportunities
- Implement a user authentication system to secure user accounts and enable personalized experiences. 
- Expand the search functionality by incorporating genre as a search criterion. 
- Develop features that enable users to mark movies as favorites and provide ratings. This will allow users to curate their own list of favorite movies and help personalize their movie recommendations.
- Implement a section that displays the movies recently viewed by the user.
- Enhance the user experience by incorporating video previews for movies. 
- Build our own API using Express.js to have more control over the data and customize it to meet specific needs.