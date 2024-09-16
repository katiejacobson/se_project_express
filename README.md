# WTWR (What to Wear?): Back End

Project #12: This project creates a basic server for the WTWR application. An Express server was created and connected to a database that was created. The routes for users and clothing items were configured and controllers for the routes were created. Additionally, basic error handling was added.

**Description of Techniques**
Project #12: Express.js was the framework that was utilized to create the server. A modular approach was used for routes and controllers while mongoDB and mongoose were used to create the database. A temporary authorization solution was created with authorization middleware, which allowed a user object to be added to each request. This will allow owners of cards and unique likes to be recorded.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing

Testing was completed with a collection of API requests in Postman (https://www.postman.com/practicumse/workspace/practicum-se-projects/collection/23570023-9b9c196e-c509-43ca-9ef9-def9bfc1377d?action=share&creator=23570023) and through Github Actions.

**Github Pages URL**
https://github.com/katiejacobson/se_project_express.git

**To Improve**
Multiple users can be added with individual ids that can be attached to the cards in the database and allow users to retrieve their own cards. Additionally, they can see which cards in the database that they liked individually.

**Remember**
Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12
