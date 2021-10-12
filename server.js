const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const hbsHelpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};



const app = express();
//process.env.PORT allows heroku to set up the port
const PORT = process.env.PORT || 3001;
// Set up Handlebars.js engine with custom helpers
// Inform Express.js on which template engine to use
app.engine(".hbs", exphbs({ extname: ".hbs", helpers: hbsHelpers}));
app.set("view engine", ".hbs");
//Middleware - makes sure that objects get converted to JSON
app.use(express.json());
//good for form submission
app.use(express.urlencoded({ extended: true }));
//set up the static paths for css, images, javascript (front end stuff)
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
