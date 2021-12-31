import express from 'express';
import cors from    'cors'
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
require('dotenv').config()




const app=express()
app.use(cors()).use(morgan()).use(helmet()).use(express.json())
app.get('/',(req,res,next)=>{
    res.send('ehll')
})
app.listen(process.env.PORT,()=>{
    console.log('LISTEN');
})