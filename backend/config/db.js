import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://saurabh123bid:saurabh36@cluster0.ljaxpgx.mongodb.net/Food_delivery_website"
    )
    .then(() => console.log("DB Connected"));
};
