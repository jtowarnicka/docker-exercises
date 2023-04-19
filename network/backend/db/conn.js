import mongoose from "mongoose";

export const Worker = mongoose.model("Worker", {
  name: String,
  depatrment: String,
});

const uri = "mongodb://database:27017/test";

const staff = [
  {
    name: "Jim Halpert",
    department: "Dunder Mifflin Paper Company",
  },
  {
    name: "Pam Beesly",
    department: "Dunder Mifflin Paper Company",
  },
  {
    name: "Dwight Schrute",
    department: "Dunder Mifflin Paper Company",
  },
  {
    name: "Michael Scott",
    department: "Dunder Mifflin Paper Company",
  },
  {
    name: "Leslie Knope",
    department: "Parks and Recreation Department",
  },
  {
    name: "Ron Swanson",
    department: "Parks and Recreation Department",
  },
  {
    name: "April Ludgate",
    department: "Parks and Recreation Department",
  },
  {
    name: "Tom Haverford",
    department: "Parks and Recreation Department",
  },
  {
    name: "Phillys Vance",
    department: "Dunder Mifflin Paper Company",
  },
  {
    name: "Andy Bernard",
    department: "Dunder Mifflin Paper Company",
  },
];

const init = async () => {
  await Worker.insertMany(staff);
};

export const connectDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose.Promise = global.Promise;

  mongoose
    .connect(uri)
    .then(() => {
      console.log("Database connected");
      init();
    })
    .catch((error) => {
      console.log("Error connecting to database");
      console.log(error);
    });
};
