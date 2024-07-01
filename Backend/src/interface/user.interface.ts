import {Document} from 'mongoose';


interface IUSER extends Document{
    name:string;
    email:string;
    gender:string;
    state:string;
    city:string;
    dob:Date;
    phone:number;
    password:string;
    hobbies:string[];
}

export default IUSER