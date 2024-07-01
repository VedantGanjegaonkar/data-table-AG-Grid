import express, { urlencoded } from 'express';
const app = express();
import dotenv from 'dotenv'
import { router } from './routes/index'
import connectDB from "./config/connection";
import cors from 'cors'
const allowedOrigins = ['http://localhost:4200'];
const corsOptions = {
    origin: (origin : any, callback : any) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };
dotenv.config();
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors(corsOptions))
const port = process.env.PORT || 3000;
app.use('/api', router);
connectDB().then(()=>{
    app.listen(port, () => {
        console.log("Connected at port number ", port);
    })
}).catch((error:any) => {
    console.log(error.message)
})