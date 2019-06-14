const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 54321;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Call index to load all routes with our app variable.
const routes = require('./app/routes');
routes.initAllRoutes(app, {});

app.listen(port, () => {
    console.log('We are live on ' + port);
});