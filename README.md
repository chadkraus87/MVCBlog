# MVCBlog
A CMS-style blog site with authentication.

![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)

# Description

This is a CMS-style blog site that allows developers to publish articles, blog posts, and share their thoughts and opinions. The application follows the Model-View-Controller (MVC) paradigm and utilizes various technologies such as Express.js, MySQL2, Sequelize, Handlebars.js, bcrypt, express-session, and connect-session-sequelize.

[GitHub Repository](https://github.com/chadkraus87/MVCBlog)

[Heroku Application](https://mvcblogchadkraus-2e5422b33d85.herokuapp.com/)

![Front End Landing Page](/public/images/mvcblog.png)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project's root directory in your terminal.
3. Run the following command to install the required dependencies: `npm install`
4. Create a `.env` file in the root directory and provide the following environment variables: 

DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
SESSION_SECRET=your_session_secret

Replace `your_database_name`, `your_database_user`, `your_database_password`, `your_database_host`, and `your_session_secret` with your own values.

5. Set up your MySQL database and configure the database connection settings in the `config/connection.js` file.
6. Run the command `npm run seed` to seed the database with sample data (optional).
7. Run the command `npm start` to start the application.
8. Open your web browser and visit `http://localhost:3001` to access the CMS-style blog site.

## Usage
When you first visit the site, you will be presented with the homepage, which includes existing blog posts if any have been posted. The homepage also provides navigation links for the homepage and the dashboard, as well as the option to log in.

Clicking on the homepage option in the navigation will take you back to the homepage. Clicking on any other links in the navigation will prompt you to either sign up or sign in.

If you choose to sign up, you will be prompted to create a username and password. Clicking on the sign-up button will save your user credentials and log you into the site.

On subsequent visits, you can choose to sign in by entering your username and password. Once signed in, you will see navigation links for the homepage, the dashboard, and the option to log out.

Clicking on the homepage option in the navigation will take you to the homepage, where you can view existing blog posts, including the post title and the date created.

When you click on an existing blog post, you will be presented with the post title, contents, post creator’s username, and date created. You will also have the option to leave a comment. If you enter a comment and click the submit button while signed in, the comment will be saved and the post will be updated to display the comment, the comment creator’s username, and the date created.

Clicking on the dashboard option in the navigation will take you to the dashboard, where you can view any blog posts you have already created and have the option to add a new blog post.

To add a new blog post, click on the button provided and enter both a title and contents for your post.Clicking on the button to create a new blog post will save the title and contents of your post. You will then be taken back to an updated dashboard with your new blog post.

In the dashboard, you can also click on one of your existing posts to delete or update it. Upon deletion or updating, you will be taken back to an updated dashboard.

To log out of the site, click on the logout option in the navigation.

If you are idle on the site for more than a set time, you will still be able to view posts and comments. However, you will be prompted to log in again before you can add, update, or delete posts.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing
Contributions to this project are welcome. If you would like to contribute, please fork the repository and submit a pull request.

## Tests
N/A

## Questions
If you have any questions or comments about this project, please contact me at chadkraus87@gmail.com. You can also find more information and other projects on my GitHub https://github.com/chadkraus87. If you encounter any issues or bugs while using this tool, please report them to the project GitHub repository so that they can be addressed. Additionally, contributions to this project are always welcome. If you would like to contribute, please review the project contribution guidelines and submit a pull request. Thank you for your support!


