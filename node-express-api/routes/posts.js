const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

// get all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.json({message: err})
    }
})

// get specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }catch(err) {
        res.json({message: err})
    }
})


// submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch(err) {
        res.json({ message: err })
    }
})

// update post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {$set: {title: req.body.title}
        });
        res.json(updatedPost);
    }catch(err) {
        res.json({message: err})
    }
})

// delete a post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId })
        res.json(removedPost);
    } catch(err) {
        res.json({message: err})
    }
})

// fetch('http://localhost:3000/posts/')
// .then(data => data.json())
// .then(result => console.log(result))



module.exports = router;