import express from "express";
const router= express.Router();
import { updateUser,getUser, deleteUser } from "../Controller/users.js";


router.patch('/:id',updateUser)
router.get('/:id',getUser)
router.delete('/:id',deleteUser)

export default router