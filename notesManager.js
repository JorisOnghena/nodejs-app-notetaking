const fs = require("fs");
const path = "./notes/notes.json"

let notes = [{ "title": "test", "id": 1 }];

const retrieveAllNotes = () => {
    //var content = fs.readFileSync(path);
    //notes = JSON.parse(content.toString().trim());

    // Alternative
    //notes = require(path);

    console.log(notes);
    return notes;
}

const retrieveSpecificNote = (id) => {
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id == id) {
            return notes[i];
        }
    }
    return { "Message": "No note found with id: " + id }
}

const deleteNote = (id) => {
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id == id) {
            notes.splice(i, 1);
            return retrieveAllNotes();
        }
    }
    return { "Message": "No note found with id: " + id }
}

const updateNote = (updatedNote) => {
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id === updatedNote.id) {
            notes[i] = updatedNote;
            return retrieveAllNotes();
        }
    }
    return { "Message": "No note found with id: " + updatedNote.id }
}

const addNote = (newNote) => {
    notes.push(newNote);
    return retrieveAllNotes();
}

/*addNote({"title":"test", "id": 2});
deleteNote(1);
updateNote({"title":"testing", "id": 2});*/

module.exports = {
    addNote,
    updateNote,
    deleteNote,
    retrieveAllNotes,
    retrieveSpecificNote
}