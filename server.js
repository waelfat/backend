import express from 'express';
import cors from    'cors'
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
require('dotenv').config()




const app=express()
app.use(cors()).use(morgan()).use(helmet())
app.get('/',(req,res,next)=>{
    res.json('ehll')
})
app.listen(process.env.PORT,()=>{
    console.log('LISTEN');
})