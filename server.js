const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');


const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
//process.env.PORT allows heroku to set up the port
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers


// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('.hbs', exphbs({ extname: ".hbs"}));
app.set('view engine', '.hbs');
//Middleware - makes sure that objects get converted to JSON
app.use(express.json());
//good for form submission
app.use(express.urlencoded({ extended: true }));
//set up the static paths for css, images, javascript (front end stuff)
app.use(express.static(path.join(__dirname, './public')));

app.use(routes);

// sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
// });
