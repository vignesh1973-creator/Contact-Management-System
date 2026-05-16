import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contactRoutes.js'
import { connectDB } from './config/db.js';
import { errorHandler } from './middlewares/errorHandling.js';


dotenv.config();

const app = express();


connectDB();


app.use(cors());
app.use(express.json());



const port = process.env.PORT || 5001


app.use('/contacts',contactRoutes)



app.use(errorHandler)



app.listen(port,()=>{
        console.log(`Server running on port ${port}`);
        
})