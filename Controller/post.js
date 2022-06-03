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

export const remove = async(req,res)=>{
    
    // const data = await postModel.findById(req.params.id)
    res.send(req.params.id) 
    // try{
    //     const allData = await postModel.find({_id:req.params.id});
    //     res.status(200).json(allData)
    // }
    // catch(err){
    //     res.status(500).json(err)
    // }

}

export const createPost = async(req,res)=>{
    try{
        const saveData = await postModel.create(req.body)
        res.status(201).json(saveData)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const updatePost = async(req,res)=>{
    const data  = await postModel.findById(req.params.id)
    try{

        if(data.userid === req.body.userid){
            const updatePost = await postModel.findByIdAndUpdate(req.params.id,req.body)
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