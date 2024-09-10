import {Router} from "express";
import {
  allMovies,
  allUpcomingMovie,
  createMovie,
  toggleWatchList
} from "../controllers/movie.controller.js";
import {upload} from "../middlewares/multer.middleware.js";

const router = Router();

// router.route("/create").post(upload.single("poster"), createUpcomingMovie);

// POST
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

// GET
router.route("/all-upcoming").get(allUpcomingMovie);
router.route("/all").get(allMovies);

// PUT
router.route("/:id").put(toggleWatchList);

export default router;
