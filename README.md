# WTWR (What to Wear?): Back End

Project #12: This project creates a basic server for the WTWR application. An Express server was created and connected to a database that was created. The routes for users and clothing items were configured and controllers for the routes were created. Additionally, basic error handling was added.

Project #13: This project adds on to the previous one by allowing users to signup, signin, and attaches an owner id to specific cards so only the owner can delete the card.

Project #15: This project adds on the previous one by adding error handling, logging, and validation middleware. The server was also deployed to a cloud server and attached to a domain so the app can be run on a website.

**Description of Techniques**
Project #12: Express.js was the framework that was utilized to create the server. A modular approach was used for routes and controllers while mongoDB and mongoose were used to create the database. A temporary authorization solution was created with authorization middleware, which allowed a user object to be added to each request. This will allow owners of cards and unique likes to be recorded.

Project #13: Authentication and authorization steps were added so that the user schma now includes an email and password, which was hashed using cryptjs. A JSON web token was created upon login with an expiration date and authentication allows users to change their name and avatar as well as delete their own cards.

Project #15: Centralized error handling was added by defining constructors for errors. Joi, celebrate, and validator packages were used to define validation functions. The winston package was used to implement request and error loggers.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing

Sprint #12: Testing was completed with a collection of API requests in Postman (https://www.postman.com/practicumse/workspace/practicum-se-projects/collection/23570023-9b9c196e-c509-43ca-9ef9-def9bfc1377d?action=share&creator=23570023) and through Github Actions.

Sprint #13: Testing was completed with a collection of API requests in Postman (https://www.postman.com/practicumse/workspace/practicum-se-projects/collection/23570023-06a4c3c9-4d68-4fa0-a1a3-8e23bee08fc8) and through Github Actions.

Sprint #15: Testing was completed with the same collection of API requests in Postman (https://www.postman.com/practicumse/workspace/practicum-se-projects/collection/23570023-06a4c3c9-4d68-4fa0-a1a3-8e23bee08fc8).

**Domain Name**
https://wtwr.kje.us

**Github Pages URL**
https://github.com/katiejacobson/se_project_express.git

**To Improve**

**Remember**
Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12
