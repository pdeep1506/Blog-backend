import postModel from "../db/models/post.js";

import { nanoid } from "nanoid";
export const getAllPost = async(req,res)=>{
    const username = req.query.username
    const category = req.query.category
    try{
        let allData
        if(username){
            allData = await postModel.find({username});
        }
        else if(category){
            allData = await postModel.find({
                categories:{
                    $in: [category]
                }
            })
        }
        else{

            allData = await postModel.find();
        }
        res.status(200).json(allData)
    }
    catch(err){
        res.status(500).json(err)
    }
}


export const getById = async(req,res)=>{
    try{
        const allData = await postModel.find({nid:req.params.id});
        
        res.status(200).json(allData)
    }
    catch(err){
        res.status(500).json(err)
    }
}



export const createPost = async(req,res)=>{
    try{
        const saveData = await postModel.create({...req.body,nid:nanoid()})
        res.status(201).json(saveData)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const updatePost = async(req,res)=>{
    const data  = await postModel.findOne({nid:req.params.id})
    try{

        if(data.username === req.body.username){
            const updatePost = await postModel.findOneAndUpdate({nid:req.params.id},req.body)
            res.status(200).json('Post successfully updated')            
        }
        else{
            res.status(404).json('You can only update you post')
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const deletePost = async(req,res)=>{
    const id = req.params.id
    const postData = await postModel.findOne({nid:id})
    
    try{
        if(postData.username === req.body.username){

            const deleteposts = await postModel.findOneAndDelete({nid:id})
            res.status(200).json('Post hase been deleted...')
        }
        else{
            res.status(500).json('You can delete only your post')
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}