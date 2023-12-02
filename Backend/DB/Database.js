import mongoose from "mongoose";

export const connectDB = async (req, res) => {

    const {connection} = await mongoose.connect("mongodb://localhost:27017/expens");

    console.log(`MongoDB Connected`);

}