const express= require ('express')
const router= express.Router()
const Post= require('../models/Post')
const path = require('path');

const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/deneme',
 {useNewUrlParser: true, useUnifiedTopology: true});

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.get('/new', (req,res)=>{
    res.render('site/addpost')
})

router.get('/:id',(req,res)=>{
    Post.findById(req.params.id).then(post =>{
    res.render('site/post',{post:post})
    })
})

router.post('/test',(req,res)=>{

    let post_image= req.files.post_image
    post_image.mv(path.resolve(__dirname,'../public/img/postimages',post_image.name))


    Post.create({
        ...req.body,
        post_image:`/img/postimages/${post_image.name}`
    })
    res.redirect('/')
})

module.exports= router

// path resolve ne ise yariyor  tekrar arastir bakalim neymis dalgasi 