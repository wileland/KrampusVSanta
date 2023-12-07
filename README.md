## Description
Jingle Judge: Naughty or Nice Edition
Table of Contents
Introduction
Technologies Used
Installation
File Structure
Configuration
Usage
Testing
Troubleshooting
Contributers
License

## Introduction 
Jingle Judge: Naughty or Nice Edition is a full-stack web application designed for managing Santa's list of who's naughty and nice. It allows users to create and manage accounts, categorize actions, and assign actions to children. Built using the MVC paradigm, it includes user authentication and a database connection for data persistence.

## Technologies Used
Node.js
Express.js
Sequelize (MySQL)
Handlebars.js
bcrypt
dotenv
Other dependencies as listed in package.json

## Installation
To set up the project environment, click the following link to be routed to the repository https://github.com/wileland/Jingle-Judge.  copy the ssh from the repository then  run the following commands in your terminal:

git clone git@github.com:wileland/Jingle-Judge.git
npm install express express-session express-handlebars sequelize connect-session-sequelize mysql2 dotenv bcrypt

## File Structure
arduino
Copy code
Jingle Judge: Naughty or Nice Edition
├── config
│   └── connection.js
├── controllers
│   ├── api
│   │   └── userRoutes.js
│   ├── index.js
│   └── viewRoutes.js
├── models
│   ├── User.js
│   ├── Child.js
│   ├── Action.js
│   └── index.js
├── public
│   ├── css
│   ├── js
│   └── images
├── views
│   ├── layouts
│   │   └── main.handlebars
│   ├── home.handlebars
│   ├── about.handlebars
│   └── ...
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js

## Configuration
Configure the .env file with your database credentials and session secret.
Ensure the Sequelize setup in config/connection.js matches your database.

## Usage
Start the server using node server.js or npm start.
Access the application at http://localhost:3001 or the configured port.
Register, log in, and navigate through the application to manage user data and children's actions.
public\images\JJ home.png
public\images\JJ child.jpg

## Testing
Utilize Insomnia or Postman to test API routes.
Confirm that routes respond correctly with appropriate status codes.
Test user authentication functions for security.

## Troubleshooting
For database issues, check your credentials and connection string in .env.
For session problems, verify the session secret and store configuration.
Debug JavaScript in public/js for frontend issues.

## Contributers
https://github.com/wileland?tab=repositories
https://github.com/TatumSterling?tab=repositories
https://github.com/AnthonyStrickland?tab=repositories
https://bulma.io/
https://www.w3schools.com/
https://leanylabs.com/blog/npm-packages-for-nodejs/

## License
This project is under the MIT License.

## Questions
For any questions, you may contact us at [GitHub] 
https://github.com/wileland?tab=repositories
https://github.com/TatumSterling?tab=repositories
https://github.com/AnthonyStrickland?tab=repositories
or Email us at
wileland7@gmail.com
tatumoakley29@hotmail.com
anthonystrickland26@gmail.com
