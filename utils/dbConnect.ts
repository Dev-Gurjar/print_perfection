import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI || "sdf", {

      });
      console.log("connected to DB")
    }
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

export default dbConnect;
