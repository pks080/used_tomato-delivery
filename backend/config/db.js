import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.mongo_url).then(()=>console.log("DataBase Connected"));
}
