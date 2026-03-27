import express from 'express';

const app = express();

import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    return res.json({message: 'Hello World!'});
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})