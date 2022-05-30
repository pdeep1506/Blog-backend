import express from "express";
const router = express.Router();
import {  createCategory, getCategory} from '../Controller/category.js'



router.post('/',createCategory)
router.get('/',getCategory)

export default router