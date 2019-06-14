const manager = require("../../notesManager");

module.exports = (app, db) => {
    // All note level endpoints
    app.get('/notes', (req, res) => {          
        res.json(manager.retrieveAllNotes())
    });

    app.get('/notes/:id', (req, res) => {  
        const id = req.params.id;        
        res.json(manager.retrieveSpecificNote(id));
    });

    app.post('/notes', (req, res) => {  
        const newNote = req.body;
        res.json(manager.addNote(newNote));
    });

    app.put('/notes', (req, res) => {  
        const updatedNote = req.body;
        res.json(manager.updateNote(updatedNote));
    });

    app.delete('/notes/:id', (req, res) => {  
        const id = req.params.id;
        res.json(manager.deleteNote(id));
    });
}