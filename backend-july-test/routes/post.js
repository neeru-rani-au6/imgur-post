var express = require('express');
var router = express.Router();
var { validateToken } = require('../middleware/authentication');
var { createpost, getallpost, getonepost, updatepost, deletepost, getUserPost } = require('../controllers/postcontroller');
/* GET users listing. */
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

router.post('/', validateToken,upload.single('file'), createpost);
router.get('/all', getallpost);
router.get('/userPost', validateToken, getUserPost)
router.get('/:id', getonepost);
router.put('/:id', validateToken, updatepost);
router.delete('/:id', validateToken, deletepost)

module.exports = router;
