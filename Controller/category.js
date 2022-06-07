import categoryModel from '../db/models/category.js'

export const createCategory = async(req,res)=>{
    try{
        const saveCategory = await categoryModel.create(req.body)
        res.status(201).json('created category')
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const getCategory = async(req,res)=>{
    try{
        const getAllCategory = await categoryModel.find();
        res.status(200).json(getAllCategory)
    }
    catch(err){
        res.status(500).json(err)
    }
}