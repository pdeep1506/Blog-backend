import userModel from "../db/models/users.js";
import postModel from "../db/models/post.js";
import bcryptjs from "bcryptjs";


export const updateUser =  async(req,res)=>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const password = bcryptjs.hashSync(req.body.password)
            const UserData = {...req.body,password}
            const updateUser = await userModel.findByIdAndUpdate(req.params.id,UserData)
            res.status(200).json({data:updateUser})
        }
        else{
            try{
                const updateUser = await userModel.findByIdAndUpdate(req.params.id,req.body)
                res.status(200).json('Update scuuessfully')
            }
            catch(err){
                res.status(500).json(err)
            }
        }
    }
    else{
        res.status(401).json("You can update only your account!");
    }
}


export const getUser = async(req,res)=>{
    try{
        const user =await userModel.find({_id:req.params.id})
        user[0].password = undefined
        
        res.status(200).json(user)
    }
    catch(err){
        
        res.status(500).json(err);
    }
}

export const deleteUser = async(req,res)=>{
    try{
        const deleteUser = await userModel.findByIdAndDelete(req.params.id)
        const deletePost = await postModel.deleteMany({userid:req.params.id})
        res.status(200).json('Deleted user')
    }
    catch(err){
        res.status(500).json(err)
    }
}