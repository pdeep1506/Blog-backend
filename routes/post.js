import express from "express";
const route = express.Router();

// import {getPostById,getPost,deletePost,updatePost,createPost } from '../Controller/post.js'
import { getAllPost,getById,remove,createPost, updatePost } from "../Controller/post.js";


route.get('/',getAllPost)
route.get('/:id',getById)
route.delete('/:id',remove)
route.post('/',createPost)

route.patch('/:id',updatePost)
export default route