const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const session = require('express-session');
const path = require('path');
const sequelize = require('./database/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');
const PORT = process.env.PORT || 3001;
const app = express();
const hbs = exphbs.create({helpers});

const sess = {
    cookie: {},
    resave: false,
    secret: 'Super secret secret',
    saveUninitialized: true,
    store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handledars');
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT,() => console.log('Now Listening'));
});