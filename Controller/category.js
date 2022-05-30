import categoryModel from '../db/models/category.js'

export const createCategory = async(req,res)=>{
    try{
        const saveCategory = await categoryModel.create(req.body)
        res.status(201).json({message:'created category',data:saveCategory})
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const getCategory = async(req,res)=>{
    try{
        const getAllCategory = await categoryModel.find();
        res.status(200).json({message:'All Category',data:getAllCategory})
    }
    catch(err){
        res.status(500).json(err)
    }
}