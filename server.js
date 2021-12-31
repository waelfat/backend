const express=require( 'express');
const cors= require('cors');
//import bodyParser from 'body-parser';
const morgan=require('morgan');
const  helmet =require('helmet');
require('dotenv').config()




const app=express()
app.use(cors()).use(morgan('tiny')).use(helmet()).use(express.json())
app.get('/',(req,res,next)=>{
    res.send('ehll')
})
app.listen(process.env.PORT,()=>{
    console.log('LISTEN');
})