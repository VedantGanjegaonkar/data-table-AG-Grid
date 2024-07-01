import userRouter from "./user.routes";
import  express  from "express";
const router=express.Router();
router.use('/users',userRouter);
export{router};