import express from "express";
const route = express.Router();
import multer from "multer";
import { nanoid } from "nanoid";
import { getAllPost,getById,createPost, updatePost,deletePost } from "../Controller/post.js";
import postModel from "../db/models/post.js";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
       
    }
  })

const upload = multer({storage:storage})
route.get('/',getAllPost)
route.get('/:id',getById)

route.post('/',createPost)
route.delete('/:id',deletePost)
route.patch('/:id',updatePost)

route.post('/image',upload.single('file'),async(req,res)=>{
    console.log(req.body.name)
    res.status(200).json('File has been uplodaded')
   
    
})
export default route