import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("MongoDB connected successfully");
        } else {
            console.log("MongoDB is already connected");
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB;
