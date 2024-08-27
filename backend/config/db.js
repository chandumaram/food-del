import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://cmmongo:mongocm123@cluster0.4ohsu.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
