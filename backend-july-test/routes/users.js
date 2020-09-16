var express = require('express');
var router = express.Router();
var { userRegister, userLogin ,userLogout} = require('../controllers/usercontroller');
/* GET users listing. */

router.post('/register', userRegister)
router.post('/login',  userLogin)
router.get('/logout',userLogout)

module.exports = router;
