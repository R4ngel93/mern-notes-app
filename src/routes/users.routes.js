/* Router */
const router = require('express').Router();

/* Controller */
const UsersCtrl = require('../controllers/users.ctrl.js');

/* Validate user token */
const validateUser = require('../middlewares/validateUser');


/* Routes */
router.post('/signup', UsersCtrl.createUser);

router.post('/login', UsersCtrl.loginUser);

router.get('/logout', validateUser, UsersCtrl.logOut);



/* Export */
module.exports = router;