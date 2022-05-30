import express from "express";
import 'dotenv/config';
import './db/conn.js'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import categoryRoute from './routes/category.js'
const port = process.env.PORT || 8000
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',authRoute)
app.use('/api/user',userRoute)
app.use('/api/category',categoryRoute)
app.listen(port,'127.0.0.1',()=>{
    console.log(`listening on the port no ${port}`)
})