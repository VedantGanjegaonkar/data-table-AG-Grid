import { userControllers } from "../controllers/index";
import express from 'express';
const router = express.Router();
const userControllersObject = new userControllers();
router.get('/getUsers', userControllersObject.getUsersController);
router.post('/createUser',userControllersObject.createUserController);
export default router