import {Router} from "express";
import {
  allUpcomingMovie,
  createUpcomingMovie
} from "../controllers/upcomingMovie.controller.js";
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
  createUpcomingMovie
);

router.route("/all").get(allUpcomingMovie);

export default router;
