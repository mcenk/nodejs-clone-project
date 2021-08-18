const mongoose= require('mongoose')
const Post = require('')

mongoose.connect('mongodb://localhost:27017/deneme', {useNewUrlParser: true, useUnifiedTopology: true});


Post.create({

    title: 'serra',
    content: 'cenk'

}, (err,post)=>{

        console.log(err,post)

})

