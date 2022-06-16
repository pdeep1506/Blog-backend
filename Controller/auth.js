import userModel from '../db/models/users.js'

import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'




export const register = async(req,res,next)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
  
    const exictinguserUser = await userModel.findOne({username})
    const exictinguserEmail = await userModel.findOne({email})
    
    
    if(!exictinguserUser && !exictinguserEmail){
        try{
            const hashpassword = bcryptjs.hashSync(password)
            const user = {username:username,email:email,password:hashpassword}
            const createUser = await userModel.create(user)
            res.status(201).json('User created successfully')
        }
        catch(err){
            console.log(err)
            if(err['keyPattern']['username'] === 1){
                res.status(401).json('User with this username is already in db')
            }
            else if(err['keyPattern']['email'] === 1){
                res.status(401).json('User with this email is already in db 12')
            }
            else{    
                res.status(500).json(err)
            }
        }
    }
    else if(exictinguserEmail && exictinguserUser){
        res.status(401).json('User with this email and username is already in db')
    }
    else if(exictinguserUser){
        res.status(401).json('User with this username is already in db')
    }
    else if(exictinguserEmail){
        res.status(401).json('User with this email is already in db')
    }
}


export const login = async(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const exictinguser  = await userModel.findOne({username:username})
    if(exictinguser){
        const decryptPassword = bcryptjs.compareSync(password,exictinguser.password)
        if(decryptPassword){
            const jwtSign = jsonwebtoken.sign({
                id:exictinguser._id, email:exictinguser.email
            },process.env.JWT_KEY,{ 
                expiresIn:'2d'
            })
            res.cookie('jwt',jwtSign)
            
            res.status(200).json(exictinguser)
        }
        else{
            res.status(401).json('Wrong credentials!')
        }
        
    }
    else{
        res.status(401).json('User with this user name is not in db')
    }
}

export const logout = async(req,res)=>{
    res.clearCookie('jwt');
    res.status(200).json('logout successfully')
}