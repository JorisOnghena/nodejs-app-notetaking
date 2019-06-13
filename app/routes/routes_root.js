module.exports = (app, db) => {
    // All root level endpoints
    app.get('/', (req, res) => {          
        res.send('You have reached the start !!')
    });
}