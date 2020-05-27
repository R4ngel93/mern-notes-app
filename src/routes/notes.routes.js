/* Router */
const router = require('express').Router();

/* Controller */
const NotesCtrl = require('../controllers/notes.ctrl.js');

/* Validate user token */
const validateUser = require('../middlewares/validateUser');

/* Routes */
router.get('/', validateUser, NotesCtrl.getNotes);

router.post('/add', validateUser, NotesCtrl.addNote);

router.put('/edit/:id', validateUser, NotesCtrl.updateNote);

router.get('/edit/:id', validateUser, NotesCtrl.getOneNote);

router.delete('/delete/:id', validateUser, NotesCtrl.deleteNote);

/* Export router */
module.exports = router;