const mongoose = require("mongoose");
const { app } = require("./app");
require("dotenv").config();

main().catch((err) => console.log(err));

async function main() {
  try {
    console.log("Connect to DB & start server");
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Connected to MongoDB");

    app.listen(process.env.PORT || 3001, () =>
      console.log(
        `Server is running on http://localhost:${process.env.PORT || 3001}`
      )
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Avslutar applikationen om anslutningen misslyckas
  }
}
