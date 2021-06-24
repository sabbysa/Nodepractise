const express = require("express")
const router = express.Router();
const Post = require('../models/Post')
//get list of all posts submited
router.get('/', async(req,res)=>{
    try{
        const posts = await Post.find()
        res.json(posts)
    }
    catch(err){
        res.json({message:err})
    }
})
//sample get
// router.get('/',(req,res)=>{
//     res.send("we are on post")
// })

// router.get('/about',(req,res)=>{
//     res.send("about page")
// })

// method to post a data
router.post('/', async (req,res)=>{
 const post =new Post({
  main: req.body.main, 
 
    })
try{
const savesPost= await post.save()
res.json(savesPost)
} 
catch(err){
    res.json({message:err})
    }

})

//filter specific post
router.get('/:postId', async (req,res)=>{
    try{
  const post = await Post.findById(req.params.postId)
  res.json(post)
    }
    catch(err){
res.json({message:err})
    }
})

//delete a data
// router.delete('/:postId',async (req,res)=>{
//     try{
//     const removedPost= await Post.remove({_id: req.params.postId})
//     res.json(removedPost)
//     }
//     catch(err){
//         res.json({message:err})
//             }
// })

//update post
// router.patch('/:postId',async (req,res)=>{
//     try{
//     const updatedPost= await Post.updateOne({_id: req.params.postId},{$set:{main:req.body.main}})
//     res.json(updatedPost)
//     }
//     catch(err){
//         res.json({message:err})
//             }
// })
module.exports = router