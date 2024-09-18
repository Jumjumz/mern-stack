import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch(error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // code 1 is exit with failure code 0 is success
    }
}