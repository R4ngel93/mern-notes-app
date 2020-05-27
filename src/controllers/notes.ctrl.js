/* Set up */
require('dotenv').config();

/* Model */
const Note = require('../models/Note.js');

/* Controllers */
module.exports = {
  //Show all notes
  getNotes: async function (req, res) {
    Note.find({ user: req.user.id }, (error, notes) => {
      error ? console.error(error) : res.json({ notes });
    });
  },

  //Add note
  addNote: async function (req, res) {
    const newNote = new Note(req.body);
    newNote.user = req.user.id;
    await newNote.save()
      .then(data => res.status(200).json({ message: 'Data added completed [\u2713]' }))
      .catch(error => res.status(400).send(error));
  },

  //Update note
  updateNote: async function (req, res) {
    const { title, description } = req.body;

    //Authorize
    const note = await Note.findById(req.params.id);
    if (note.user != req.user.id) {
      return res.json('Not authorized [x]').redirect('/notes');
    }

    //Update
    await Note.findByIdAndUpdate(req.params.id, { title, description }, (error, data) => {
      error ? res.status(400).send("Unable to update the database") : res.json('Update completed [\u2713]');
    });

  },

  //Find Note
  getOneNote: async function (req, res) {
    const id = req.params.id;
    Note.findById(id)
      .then(note => res.json(note))
      .catch(error => console.error(error));
  },

  //Remove note
  deleteNote: async function (req, res) {

    //Authorize
    await Note.findById(req.params.id)
      .then(note => {
        if (note.user != req.user.id) {
          return res.json('Not authorized [x]').redirect('/notes');
        }
      })
      .catch(error => res.status(400).send(error));

    //Delete note
    await Note.findByIdAndDelete(req.params.id)
      .then(() => res.json('Data removed [\u2713]'))
      .catch(error => res.json(error));

  }
}