module.exports = (app, db) => {
    // All root level endpoints
    app.get('/', (req, res) => {          
        res.json({"message":"You have reached the start !!"});
    });
}