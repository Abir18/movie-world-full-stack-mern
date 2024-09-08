import {Router} from "express";
import {
  allMovies,
  allUpcomingMovie,
  createMovie
} from "../controllers/movie.controller.js";
import {upload} from "../middlewares/multer.middleware.js";

const router = Router();

// router.route("/create").post(upload.single("poster"), createUpcomingMovie);
router.route("/create").post(
  upload.fields([
    {
      name: "poster",
      maxCount: 1
    },
    {
      name: "coverImage",
      maxCount: 1
    }
  ]),
  createMovie
);

router.route("/all-upcoming").get(allUpcomingMovie);
router.route("/all").get(allMovies);

export default router;
