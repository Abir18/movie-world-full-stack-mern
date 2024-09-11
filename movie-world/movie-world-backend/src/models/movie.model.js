import mongoose, {Schema} from "mongoose";
const movieSchema = new Schema(
  {
    movieName: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    episodes: Number,
    videos: Number,
    photos: {
      type: Number
    },
    description: {
      type: String
    },
    cast: [{type: String}],
    creator: [String],
    upcoming: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    review: {
      type: Number
    },
    addedToWatchList: {
      type: Boolean,
      required: true
    },
    addedToLibrary: {
      type: Boolean,
      default: false
    },
    givenRating: {
      type: Boolean,
      required: true
    }
  },
  {timestamps: true}
);

export const Movie = mongoose.model("Movie", movieSchema);
