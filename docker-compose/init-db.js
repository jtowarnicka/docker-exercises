db = db.getSiblingDB("users");
db.users.drop();

db.users.insertMany([
  {
    name: "Drew",
    last_name: "Barrymore",
  },
  {
    name: "Daisy",
    last_name: "Jones",
  },
  {
    name: "Camila",
    last_name: "Alvarez",
  },
]);
