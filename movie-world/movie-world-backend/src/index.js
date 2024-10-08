import {app} from "./app.js";
import connectDB from "./db/index.js";

import dotenv from "dotenv";

// dotenv.config();

dotenv.config({
  path: "./.env"
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Movie world server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database error", err);
  });
