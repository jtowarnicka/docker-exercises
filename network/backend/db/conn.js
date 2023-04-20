import mongoose from "mongoose";

export const Worker = mongoose.model("Worker", {
  name: String,
  department: String,
});

const uri = "mongodb://database:27017/test";

export const connectDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose.Promise = global.Promise;

  mongoose
    .connect(uri)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("Error connecting to database");
      console.log(error);
    });
};
