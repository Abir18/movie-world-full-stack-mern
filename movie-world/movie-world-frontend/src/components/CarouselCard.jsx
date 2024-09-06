import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import React from "react";
import {FaStar} from "react-icons/fa";

import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";
import {GoPlus} from "react-icons/go";
import {IoMdStarOutline} from "react-icons/io";
import {LuPlayCircle} from "react-icons/lu";

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

function CarouselCard({movieList}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
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
              key={movie.movieName}
              className=" w-[300px] h-[500px] bg-[#13171A] rounded-xl"
            >
              <div className="rounded-xl">
                <img
                  src={movie.image}
                  alt=""
                  className="w-full h-[300px] rounded-xl"
                />
              </div>
              <div className="flex flex-col items-start gap-y-2 mt-2 ml-6 sm:ml-4">
                <p className="text-xl  font-oswald uppercase font-medium tracking-tight text-white sm:text-2xl mt-2 text-center">
                  {movie.movieName}
                </p>
                <p className="flex justify-center items-center text-sm  font-roboto font-medium tracking-wider text-white sm:text-xl mt-2 text-center">
                  <FaStar size="16px" color="yellow" className="mb-2" />{" "}
                  <span className="ml-1 mb-1 ">
                    {movie.rating}({movie.review})
                  </span>
                  <IoMdStarOutline
                    size="24px"
                    color="cyan"
                    className="mb-2 ml-3 hover:cursor-pointer"
                  />
                </p>
                <button
                  className="h-10 px-8 py-6  flex justify-center items-center gap-2 font-semibold rounded-[35px]  text-white bg-gradient-to-r from-cyan-500 to-blue-800 hover:from-cyan-900"
                  type="submit"
                >
                  <GoPlus size="24px" /> WATCH LIST
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
          <h1 className="text-2xl font-roboto font-semibold tracking-tight text-white sm:text-5xl pt-16">
            <span className="text-[#d6c810]">You </span>
            <span className=" text-[#0399FA]">
              have not rated any movies Yet..
            </span>
          </h1>
        </div>
      )}
    </div>
  );
}

export default CarouselCard;
