import mongoose, {Schema} from "mongoose";
const upcomingMovieSchema = new Schema(
  {
    movieName: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      required: true
    },
    episodes: {
      type: Number
    },
    videos: {
      type: Number
    },
    photos: {
      type: Number
    },
    description: {
      type: String
    },
    cast: [{type: String}],
    creator: [String],
    rating: {
      type: Number
    },
    review: {
      type: Number
    }
  },
  {timestamps: true}
);

export const UpcomingMovie = mongoose.model(
  "UpcomingMovie",
  upcomingMovieSchema
);
