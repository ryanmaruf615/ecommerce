import express from'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRouts.js';
import { notFound , errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
const app = express();

//route
app.use('/api/products',productRoutes);

//middlewares
app.use(notFound);
app.use(errorHandler);

//server port 
const PORT= process.env.PORT || 5000;
app.listen(PORT,console.log('server is running'.yellow.bold));
