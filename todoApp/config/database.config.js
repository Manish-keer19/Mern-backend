import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const Dbconnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

export default Dbconnection;
