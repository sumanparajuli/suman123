const express = require('express')
const router = express.Router()
const {createPost, editPost, deletePost, getPost,getAllPost} = require('../controllers/posts')
// create, edit, delete,getposts endpoints
router.route('/getAllPost').get(getAllPost)
router.route('/createpost').post(createPost)
router.route('/editpost/:id').patch(editPost)
router.route('/deletepost/:id').delete(deletePost)
router.route('/getPost/:id').get(getPost)

module.exports = router