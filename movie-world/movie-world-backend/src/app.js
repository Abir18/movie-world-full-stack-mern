import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  })
);

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to Movie World");
});

// routes import
import movieRouter from "./routes/movie.routes.js";

// routes declaration
app.use("/api/v1/movies", movieRouter);

export {app};
