import React from "react";
import CarouselCard from "../components/CarouselCard";

// const ratedMovieList = [];
const watchListMovies = [
  {
    movieName: "Joker",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    rating: 4.5
  },
  {
    movieName: "Joker",
    image: "https://i.ebayimg.com/images/g/CwEAAOSwv4xf5cdv/s-l1200.jpg",
    rating: 4.5
  },
  {
    movieName: "Joker",
    image:
      "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg",
    rating: 4.5
  },
  {
    movieName: "Joker",
    image:
      "https://m.media-amazon.com/images/I/71hGGgSVC1L._AC_UF1000,1000_QL80_.jpg",
    rating: 4.5
  },
  {
    movieName: "Joker",
    image:
      "https://ew.com/thmb/B0w9qzmQqCZ1tumxv8cBx0aPTrQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mcddakn_ec005-2000-a3d30c1958fb442486fb1e10ba92dd17.jpg",
    rating: 4.5
  }
];

export const WatchList = () => {
  return (
    <div className="bg-[url('assets/images/reel.jpg')] bg-cover min-h-screen sm:h-screen relative">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
      <div className="relative flex flex-col items-start ml-32">
        <h1 className="text-2xl font-oswald font-semibold tracking-tight text-white sm:text-5xl uppercase pt-16">
          <span className="text-[#fff]">Your </span>
          <span className=" text-[#F5C519]">Watch-List</span>
        </h1>
      </div>
      <div className="relative pt-12">
        <CarouselCard movieList={watchListMovies} />
      </div>
    </div>
  );
};
