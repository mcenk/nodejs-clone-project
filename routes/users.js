const express= require('express')
const router=express.Router()
const User = require('../models/User');


router.get('/register',(req,res)=>{
    res.render('site/register')
})
router.get('/login',(req,res)=>{

    res.render('site/login')
})


router.post('/register', (req,res)=>{
    User.create(req.body, (err,user)=>{
    res.redirect('/')    
    })
})

router.post('/login', (req,res)=>{

    const {email,password}= req.body

    User.findOne({email},(err,user)=>{
        if (user){
            if(user.password==password){

                res.redirect('/')
            }
            else {
                console.log('hatali giris')
                res.redirect('/login')
            }
        }
        else {

            res.redirect('/register')
        }

    })



})


module.exports= router