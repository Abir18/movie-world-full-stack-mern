import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

import {BsCheck2} from "react-icons/bs";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";
import {GoPlus} from "react-icons/go";
import {IoMdStarOutline} from "react-icons/io";
import {LuPlayCircle} from "react-icons/lu";
import {Link} from "react-router-dom";

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaChevronLeft className="arrows" size="30px" color="#3497e9" />
    </div>
  );
}

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaChevronRight className="arrows" size="30px" color="#3497e9" />
    </div>
  );
}

function CarouselCard({movieList, watch, setMovies, onClick}) {
  const [moviesf, setMoviesf] = useState(movieList);

  const requestOptions = {
    method: "PUT", // Specify the request method
    headers: {"Content-Type": "application/json"} // Specify the content type
    // body: JSON.stringify(data) // Send the data in JSON format
  };

  const updateWatchList = (id) => {
    fetch(`${import.meta.env.VITE_SERVER}/api/v1/movies/${id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const update = movieList.find((movie) => movie._id === id);
        update.addedToWatchList = !update.addedToWatchList;
        console.log(update, "update");

        setMovies(movieList.map((item) => (item._id === id ? update : item)));

        console.log(movieList, "movies");
      });
  };

  // console.log(moviesf, "moviesf");

  // console.log("hello");

  // useEffect(() => {}, []);

  const animate = watch === "watch" ? false : true;
  var settings = {
    dots: false,
    infinite: true,
    // autoplay: animate,
    autoplaySpeed: 1000,
    speed: 1000,
    draggable: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-[90%] sm:w-[85%] m-auto ">
      {movieList.length > 0 ? (
        <Slider {...settings}>
          {movieList.map((movie) => (
            <div
              key={movie._id}
              className=" w-[300px] h-[500px] bg-[#13171A] rounded-xl "
            >
              <div className="rounded-xl">
                <Link to={`/movie-details/${movie._id}`}>
                  <img
                    src={movie.poster}
                    alt={movie.movieName}
                    className="w-full h-[300px] rounded-t-xl cursor-pointer object-cover"
                  />
                </Link>
              </div>

              <div className="flex flex-col items-start gap-y-2 mt-2 ml-6 sm:ml-4">
                <p className="text-xl  font-oswald uppercase font-medium tracking-tight text-white sm:text-2xl mt-2 text-center">
                  <Link to={`/movie-details/${movie._id}`}>
                    {movie.movieName}
                  </Link>
                </p>
                <p className="flex justify-center items-center text-sm  font-roboto font-medium tracking-wider text-white sm:text-xl mt-2 text-center">
                  <FaStar size="16px" color="yellow" className="mb-2" />{" "}
                  <span className="ml-1 mb-1 ">
                    {movie.rating}
                    {watch && movie.review && <span>({movie.review})</span>}
                  </span>
                  {watch && movie.review && (
                    <IoMdStarOutline
                      size="24px"
                      color="cyan"
                      className="mb-2 ml-3 hover:cursor-pointer"
                    />
                  )}
                </p>
                <button
                  className="h-10 px-8 py-6  flex justify-center items-center gap-2 font-semibold rounded-[35px]  text-white bg-gradient-to-r from-cyan-500 to-blue-800 hover:from-cyan-900"
                  type="submit"
                  onClick={() => {
                    // movie.addedToWatchList = !movie.addedToWatchList;
                    updateWatchList(movie._id);
                    // onClick(movie._id);
                  }}
                >
                  {movie.addedToWatchList ? (
                    <BsCheck2 size="24px" />
                  ) : (
                    <GoPlus size="24px" />
                  )}
                  WATCH LIST
                </button>
                <p className="flex text-sm  font-roboto font-medium tracking-wider text-white sm:text-sm mt-2 text-center hover:cursor-pointer">
                  <LuPlayCircle size="20px" className="mb-2 mr-2" />
                  TRAILER
                </p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-oswald font-semibold tracking-tight text-white sm:text-5xl uppercase pt-16">
            <span className=" text-[#0399FA]">No </span>
            <span className="text-white">MOVIES </span>
          </h1>
        </div>
      )}
    </div>
  );
}

export default CarouselCard;
