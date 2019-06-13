module.exports = (app, db) => {
    // All note level endpoints
    app.get('/notes', (req, res) => {  
        res.send('Hello there !')
    });
}