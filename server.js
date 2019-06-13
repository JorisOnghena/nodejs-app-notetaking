const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 54321;

app.use(bodyParser.urlencoded({ extended: true }));

// Call index to load all routes with our app vaiable.
const routes = require('./app/routes');
routes.initAllRoutes(app, {});

app.listen(port, () => {
    console.log('We are live on ' + port);
});