module.exports = (app, db) => {
    // All note level endpoints
    app.get('/notes', (req, res) => {  
        res.send('Hello there !')
    });

    app.get('/notes/:id', (req, res) => {  
        const id = req.params.id;
        res.send(`You requested note: ${id}`);
    });

    app.post('/notes', (req, res) => {  
        res.send('You created a note !');
    });

    app.put('/notes', (req, res) => {  
        res.send('You updated a note !');
    });

    app.delete('/notes/:id', (req, res) => {  
        const id = req.params.id;
        res.send(`You deleted note: ${id} !`);
    });
}