import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect("mongodb+srv://akansara833:Anshkansara833@dhirya-real-estate.4qdrdwm.mongodb.net/DhairyaRealEstate1?retryWrites=true&w=majority"
);
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user', userRoute)
app.use("/api/residency", residencyRoute)