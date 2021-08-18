const express= require ('express')
const router= express.Router()
const Post= require('../models/Post')

const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/deneme', {useNewUrlParser: true, useUnifiedTopology: true});


router.use(express.urlencoded({ extended: true }))

// // parse application/json
router.use(express.json())


router.get('/new', (req,res)=>{

    res.render('site/addpost')

})

router.post('/test',(req,res)=>{

    Post.create(req.body)
    console.log(req.body)
    res.redirect('/')
})

module.exports= router
