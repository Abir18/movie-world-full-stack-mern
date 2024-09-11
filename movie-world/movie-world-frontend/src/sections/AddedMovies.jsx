import React, {useEffect, useState} from "react";
import {GoPlus} from "react-icons/go";
import {Link} from "react-router-dom";

const AddedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/api/v1/movies/all`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, []);

  useEffect(() => {
    // console.log(movies, "movies");
    const filteredMovies = movies.filter((movie) => movie.addedToLibrary);
    setMyMovies(filteredMovies);
    // console.log(ratedMovies, "ratedMovies");
  }, [movies]);

  return (
    <div className=" bg-black min-h-screen">
      <div className="relative flex flex-col justify-center items-center pt-12 ">
        <h1 className="text-2xl font-oswald font-semibold tracking-tight text-white sm:text-4xl uppercase pt-16">
          <span className=" text-[#0399FA]">My Added </span>
          <span className="text-[#F5C519]">Movies </span>
        </h1>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {myMovies.map((movie) => (
          <div
            key={movie._id}
            className="relative  w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]  rounded-xl ml-10"
          >
            <div className="rounded-xl">
              <div className="absolute top-8 left-32 sm:top-16 sm:left-60">
                <button
                  className="h-10 px-6 py-4  flex justify-center items-center gap-2  font-semibold rounded-[35px]  text-white bg-gradient-to-r from-cyan-500 to-blue-800 hover:from-cyan-900"
                  type="submit"
                >
                  EDIT MOVIES
                </button>
              </div>

              <img
                src={movie.poster}
                alt="my-added-movie"
                className="w-full h-[300px] sm:h-[500px] rounded-xl object-cover"
              />
            </div>
          </div>
        ))}

        <div className=" w-[300px] h-[300px] border-dashed border-2 border-white bg-[#13171A] rounded-xl ml-10 sm:mt-24">
          <div className="flex justify-center items-center relative w-[100%] h-[100%]">
            <Link to={`/movies`}>
              <button
                className="h-10 px-8 py-6  flex justify-center items-center gap-2 font-semibold rounded-[35px]  text-white bg-gradient-to-r from-cyan-500 to-blue-800 hover:from-cyan-900"
                type="submit"
              >
                <GoPlus size="24px" /> ADD MOVIE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedMovies;
