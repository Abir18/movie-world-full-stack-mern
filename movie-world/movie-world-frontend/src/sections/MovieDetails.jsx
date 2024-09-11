import React, {useEffect, useState} from "react";
import {FaStar} from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa6";
import {IoMdStarOutline} from "react-icons/io";
import {PiPlayCircleThin} from "react-icons/pi";
import {useParams} from "react-router-dom";

const MovieDetails = () => {
  const {id} = useParams();

  const [movies, setMovies] = useState([]);
  const [matchedMovies, setMatchedMovies] = useState({});
  useEffect(() => {
    fetch(`/api/v1/movies/all`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, []);

  useEffect(() => {
    console.log(movies, "movies");
    const findMovies = movies.find((movie) => movie._id === id);
    setMatchedMovies(findMovies);
    // console.log(matchedMovies, "ratedMovies");
  }, [movies, id, matchedMovies]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-black sm:px-40 pb-8">
        <div className="grid  sm:grid-cols-3 grid-cols-1">
          <div className="sm:col-span-1 mx-auto">
            <div className="rounded-xl">
              <img
                src={matchedMovies?.poster}
                alt={matchedMovies?.movieName}
                className="w-[300px] h-[400px] rounded-xl object-cover"
              />
            </div>
            <div className="font-poppins font-medium uppercase text-xl pt-4">
              <h2 className="py-1">
                <span className="text-white">Episodes</span>{" "}
                <span className="text-yellow-400 ">
                  {matchedMovies?.episodes}
                </span>
              </h2>
              <h2 className="py-1">
                <span className="text-white">Videos</span>{" "}
                <span className="text-yellow-400 ">
                  {" "}
                  {matchedMovies?.videos}
                </span>
              </h2>
              <h2 className="py-1">
                <span className="text-white">Photos</span>{" "}
                <span className="text-yellow-400 ">
                  {matchedMovies?.photos}
                </span>
              </h2>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="">
              <div className="rounded-xl relative">
                <img
                  src={matchedMovies?.poster}
                  alt={matchedMovies?.movieName}
                  className="w-full sm:w-[750px] h-[400px] object-cover"
                />
                <div className="absolute top-[40%] left-[35%]">
                  <p className="flex text-xl  font-roboto font-bold tracking-wider text-white sm:text-2xl  text-center hover:cursor-pointer">
                    <PiPlayCircleThin size="50px" className="  mr-2" />
                    <span className="mt-2">TRAILER</span>
                  </p>
                </div>
              </div>
              <div className="sm:border-l-2 border-[#029AFA] pl-8">
                <p className="text-white text-[18px] font-poppins font-normal leading-loose mt-4">
                  {matchedMovies?.description}
                </p>
                <p className=" text-white text-[18px] font-poppins py-2">
                  <span className="font-bold text-[#029AFA] ">Creators: </span>
                  <span>
                    {matchedMovies?.creator?.map((element) => (
                      <span key={element} className="font-normal">
                        {element}{" "}
                      </span>
                    ))}
                  </span>
                </p>
                <p className="text-white text-[18px] font-poppins font-medium py-2">
                  <span className="font-bold text-[#029AFA]">Starring: </span>
                  {/* {matchedMovies?.cast} */}
                  <span>
                    {matchedMovies?.cast?.map((element) => (
                      <span key={element} className="font-normal">
                        {element}{" "}
                      </span>
                    ))}
                  </span>
                </p>
                <p className="flex justify-start items-center text-sm  font-roboto font-medium tracking-wider text-white sm:text-xl mt-2 text-center">
                  <FaStar size="16px" color="yellow" className="mb-2" />{" "}
                  <span className="ml-1 mb-1 ">
                    {matchedMovies?.rating}
                    <span>({matchedMovies?.review})</span>
                  </span>
                  <IoMdStarOutline
                    size="24px"
                    color="#029AFA"
                    className="mb-2 ml-1 hover:cursor-pointer"
                  />{" "}
                  <span className="mb-1 font-normal text-[18px]">
                    {" "}
                    &nbsp;Rate Now{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-900 to-black min-h-screen">
        <div className="pl-32 relative">
          <h1 className="text-2xl font-oswald font-semibold tracking-tight text-white sm:text-4xl uppercase pt-20">
            <span className="text-white">Top</span>
            <span className=" text-[#0399FA]"> Cast</span>{" "}
          </h1>
          <FaChevronRight
            size="30px"
            color="#0399FA"
            className="bg-white rounded-md absolute top-[71%] left-[18%]"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-8 sm:px-32 ">
          {matchedMovies?.cast?.map((actor) => (
            <div
              key={actor}
              className="grid grid-cols-2 bg-gray-800 text-white rounded-xl"
            >
              <div>
                <figure className="rounded-xl p-8">
                  <img
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                    src={matchedMovies?.poster}
                    alt=""
                    width="384"
                    height="512"
                  />
                </figure>
              </div>
              <div className="py-8 ">
                <p className="text-lg font-medium">{actor}</p>
                <p className="text-md font-medium">Netflix</p>
                <p className="text-md font-medium">
                  {matchedMovies?.episodes} Episodes, {matchedMovies?.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
