import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URI || '';

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to the database...");
    } catch (error:any) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;
