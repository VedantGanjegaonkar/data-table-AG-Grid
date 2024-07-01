import mongoose,{Model, Schema, Document} from "mongoose";
import { IUSER } from "../interface/index";

const userSchema:Schema<IUSER>=new Schema(
    {

        name:{
            type:String,
            required:[true,'Name is required...']
        },
        email:{
            type:String,
            required:[true,'Email is required...'],
            unique:true
        },
        gender:{
            type:String,
            required:[true,'Gender is required...'],
        },
        state:{
            type:String,
            required:[true,'Password is required...']
        },
        city:{
            type:String,
            required:[true,'City is required...']
        },
        dob:{
            type:Date,
            required:[true,'DOB is required...']
        },
        phone:{
            type:Number,
            required:[true,'Phone is required...']
        },
        password:{
            type:String,
            required:[true,'Password is required...']
        },
       hobbies:[{
            type:String,
            required:[true,'Hobbies is required...']
       }]
    },
    {timestamps:true})

    type userModel=Model<IUSER>
    const User:userModel=mongoose.model<IUSER>('User',userSchema);
    export default User;

    
   
   
