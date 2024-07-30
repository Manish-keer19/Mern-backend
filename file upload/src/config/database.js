import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Database connected succefully");
    })
    .catch((error) => {
      console.log("Database could not connect ", error);
    });
};
