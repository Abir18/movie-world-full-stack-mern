import {Movie} from "../models/movie.model.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";

const createMovie = asyncHandler(async (req, res) => {
  const {
    movieName,
    description,
    year,
    episodes,
    videos,
    photos,
    cast,
    creator,
    rating,
    review,
    upcoming,
    givenRating,
    addedToWatchList,
    addedToLibrary
  } = req.body;

  //   if (
  //     [movieName, cast].some((field) => field?.trim() === "")
  //   ) {
  //     throw new ApiError(400, "All fields are requied");
  //   }

  if (!movieName) {
    throw new ApiError(400, "movieName field is requied");
  }
  if (!year) {
    throw new ApiError(400, "year field is requied");
  }
  if (!cast) {
    throw new ApiError(400, "cast field is requied");
  }
  if (!rating) {
    throw new ApiError(400, "rating field is requied");
  }

  if (!upcoming) {
    throw new ApiError(400, "upcoming field is requied");
  }
  if (!givenRating) {
    throw new ApiError(400, "givenRating field is requied");
  }
  if (!addedToWatchList) {
    throw new ApiError(400, "addedToWatchList field is requied");
  }

  console.log(req.files, "reqFile");

  let posterImageLocalPath;

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

  const createdMovie = await Movie.create({
    movieName,
    description,
    year,
    episodes,
    videos,
    photos,
    cast,
    creator,
    rating,
    review,
    upcoming,
    givenRating,
    addedToWatchList,
    poster: poster.url
  });

  return res
    .status(201)
    .json(
      new ApiResponse(200, createdMovie, "Upcoming movie created successfully")
    );
});

const allMovies = async (req, res) => {
  const all = await Movie.find({});
  return res.status(200).json(new ApiResponse(200, all, "All movies "));
};

const allUpcomingMovie = async (req, res) => {
  const all = await Movie.find({upcoming: true});
  return res
    .status(200)
    .json(new ApiResponse(200, all, "All Upcoming movies "));
};

export const toggleWatchList = async (req, res) => {
  const {id} = req.params;

  console.log(id);
  const matched = await Movie.findById(id);
  // console.log(matched, "matched");

  const prev = matched.addedToWatchList;
  // console.log(prev, "addedToWatchList");

  const updatedWatchList = await Movie.findByIdAndUpdate(
    id,
    {
      $set: {
        addedToWatchList: !prev
      }
    },
    {new: true}
  ).select("movieName addedToWatchList");

  console.log(updatedWatchList, "updatedWatchList");

  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedWatchList, "Updated movie successfully.")
    );
};

export {allMovies, allUpcomingMovie, createMovie};
