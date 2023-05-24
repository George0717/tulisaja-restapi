const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const  mongoose = require('mongoose')

router.post('/', async(req, res) => {
    try{
        const post = await Post.find()
        res.json(post)
    }catch(error){
        res.json({
            message: error
        })
    }
})

module.exports = router