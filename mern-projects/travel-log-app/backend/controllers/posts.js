const Post = require('../models/PostSchema')
const mongoose = require('mongoose')

const createPost = async (req, res) => {
    try {

        if (!req.body.title || !req.body.description) {
            return res.status(401).json({ message: 'Title or Description cannot be blank' })
        }

        const post = await Post.create({
            title: req.body.title,
            description: req.body.description
        })

        if (post) {

            return res.status(200).json({ message: 'Posted Successfully', post })
        }else{
            return res.status(400).json({message: 'Cannot post at the moment'})
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server Error' })
    }
}

const editPost = async (req, res) => {
    const { title: newTitle, description: newDescription } = req.body
    const id = req.params.id
    if (!newTitle || !newDescription) {
        return res.status(401).json({ message: 'Title or Description cannot be blank' })
    }
    
    var valid = mongoose.Types.ObjectId.isValid(id);


    // find if a note exist in the database if not return no note exists
    if (valid) {
        let post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(400).json({ message: 'No Post available to edit with that id' })
        }
        post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ message: 'Post Updated Successfully', post })
    } else {
        return res.status(401).json({ message: "Not a valid id" })
    }


}
const deletePost = async (req, res) => {
    const { id } = req.params
    const isValidID = mongoose.Types.ObjectId.isValid(id)

    if (isValidID) {
        const toBeDeleted = await Post.findByIdAndDelete(id)
        if (!toBeDeleted) {
            return res.json({ message: 'Nothing to delete' })
        }
        return res.json({ message: 'Your Post has been deleted', toBeDeleted })
    } else {
        return res.json({ message: 'The thing you are trying to delete does not exists' })
    }


}
const getPost = async (req, res) => {
    const id = req.params.id
    const isValidID = mongoose.Types.ObjectId.isValid(id)

    if (isValidID) {
        const post = await Post.findOne({ _id: id })
        res.status(200).json({ post })
    } else {
        return res.json({ message: 'The thing you are trying to get does not exists' })

    }

}
const getAllPost = async (req, res) => {
    const allposts = await Post.find({})

    if (!allposts) {
        return res.status(400).json({ message: 'There are no posts available.' })
    }

    res.status(200).json(allposts)
}

module.exports = {
    createPost,
    editPost,
    deletePost,
    getPost,
    getAllPost
}