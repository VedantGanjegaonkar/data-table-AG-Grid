import { Request, Response } from "express";
import { userService } from "../services/index";
import { IUSER, Request1 } from "../interface/index";
import { ErrorHandler } from "../errorsHandlers/error";
import { responseError, server_Error } from "../utils/responseError";
import { SUCCESS_MSG, ERROR_MSG, STATUS_CODES } from "../utils/constants";
const userServiceObject: userService = new userService();
export class userControllers {
  async getUsersController(req: Request, res: Response): Promise<void> {
    try {

      const users: IUSER[] = await userServiceObject.getUsers(
      );
      res.status(STATUS_CODES.OK).json(users);
    } catch (error: any) {
      const resp = server_Error(error);
      res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(resp);
      return;
    }
  }
  async createUserController(req: Request, res: Response): Promise<void> {
    try {
      const {name,email,gender,state,city,dob,phone,password,hobbies} = req.body
      const userData={name,email,gender,state,city,dob,phone,password,hobbies} as IUSER
      const user: IUSER = await userServiceObject.createUser(userData);
      res.status(STATUS_CODES.CREATED).json(user);
      return;
    } catch (error: any) {
      let resp = server_Error(error);
      if (error.code == 11000) {
        const resp1 = ERROR_MSG.NAME_TAKEN('Username');
        res.status(STATUS_CODES.BAD_REQUEST).json(resp1);
        return;
      }
      res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(resp);
      return;
    }
  }
}