import postModel from "../db/models/post.js";

export const getAllPost = async(req,res)=>{
    try{
        const allData = await postModel.find();
        res.status(200).json(allData)
    }
    catch(err){
        res.status(500).json(err)
    }
}


export const getById = async(req,res)=>{
    try{
        const allData = await postModel.find({_id:req.params.id});
        res.status(200).json(allData)
    }
    catch(err){
        res.status(500).json(err)
    }
}