require('dotenv').config();
const express=require('express');
const cors=require('cors');
const matchesRoutes=require('./routes/matches.js');

const {ErrorMiddleware}=require('./utility/ErrorHandler.js');

const app=express();

app.use(cors({
    origin:process.env.FRONTEND_API,
    credentials:true,
    methods:['GET','POST','PUT'],
    allowedHeaders:['Content-Type']
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(ErrorMiddleware)

app.use('/',matchesRoutes);

app.listen(3000,()=>{
    console.log('Server is listening');
})