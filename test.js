const mongoose= require('mongoose')
const Post = require('./models/Post')

mongoose.connect('mongodb://localhost:27017/deneme', {useNewUrlParser: true, useUnifiedTopology: true});


// Post.create({

//     title: 'merve',
//     content: 'cenk'

// }, (err,post)=>{

//         console.log(err,post)

// })

// Post.find({

// title:'merve'
// },(err,a)=>{
//     console.log(err,a)

// })

