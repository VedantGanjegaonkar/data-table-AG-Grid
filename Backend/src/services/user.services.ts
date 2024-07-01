import bcrypt from "bcrypt";
import { User } from "../models/index";

import { IUSER } from "../interface/index";

import dotenv from "dotenv";

dotenv.config();
export class userService {
  async getUsers(): Promise<IUSER[]> {
    return await User.find({});
  }
  async createUser(userData: IUSER): Promise<IUSER> {
    const salt = 10;
    const hashedpassword: string = bcrypt.hashSync(userData.password, salt);
    userData.password=hashedpassword
    return await User.create(userData)
  }
}
