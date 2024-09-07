import {UpcomingMovie} from "../models/upcomingMovie.model.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";

const createUpcomingMovie = asyncHandler(async (req, res) => {
  const {
    movieName,
    description,
    episodes,
    videos,
    photos,
    cast,
    creator,
    rating,
    review
  } = req.body;

  //   if (
  //     [movieName, cast].some((field) => field?.trim() === "")
  //   ) {
  //     throw new ApiError(400, "All fields are requied");
  //   }

  if (!movieName) {
    throw new ApiError(400, "Movie name is requied");
  }

  console.log(req.file, "reqFile");

  let posterImageLocalPath;
  // let posterImageLocalPath = (posterImageLocalPath = req.file?.poster[0]?.path);

  if (
    req.files &&
    Array.isArray(req.files.poster) &&
    req.files.poster.length > 0
  ) {
    posterImageLocalPath = req.files?.poster[0]?.path;
  }

  if (!posterImageLocalPath) {
    throw new ApiError(400, "Movie poster image file is required");
  }

  const poster = await uploadOnCloudinary(posterImageLocalPath);

  if (!poster) {
    throw new ApiError(400, "Movie poster image file is required");
  }

  const upcomingMovie = await UpcomingMovie.create({
    movieName,
    description,
    episodes,
    videos,
    photos,
    cast,
    creator,
    rating,
    review,
    poster: poster.url
  });

  return res
    .status(201)
    .json(
      new ApiResponse(200, upcomingMovie, "Upcoming movie created successfully")
    );
});

const allUpcomingMovie = async (req, res) => {
  const all = await UpcomingMovie.find({});
  return res
    .status(200)
    .json(new ApiResponse(200, all, "All Upcoming movies "));
};

export {allUpcomingMovie, createUpcomingMovie};
