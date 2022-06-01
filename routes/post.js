import express from "express";
const route = express.Router();

// import {getPostById,getPost,deletePost,updatePost,createPost } from '../Controller/post.js'
import { getAllPost,getById } from "../Controller/post.js";


route.get('/',getAllPost)
route.get('/:id',getById)

export default route