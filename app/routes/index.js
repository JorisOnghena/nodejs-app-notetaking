const globalRoutes = require('./routes_root');
const noteRoutes = require('./routes_notes');

const initAllRoutes = (app, db) => {
    globalRoutes(app, db);
    noteRoutes(app, db);
}

// Here we export the function by name so we can call it later.
// You can also just export the function above but I like the readability.

module.exports = {
    initAllRoutes
}