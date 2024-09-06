import React from "react";
import macbookPhoto from "../assets/images/aesthetic.png";

const MoviePanel = () => {
  return (
    <div className="bg-[url('assets/images/dark-knight.jpg')] bg-cover min-h-screen sm:h-screen relative">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative">
        <div className="col-span-2 sm:text-start mt-24 sm:mt-56 ml-10 sm:ml-40">
          <h1 className="text-xl text-center font-oswald font-semibold  text-[#0399FA] sm:text-4xl uppercase ">
            <span className="text-white">Enjoy it</span>{" "}
            <span className="text-[#F5C519]">Movies</span>
          </h1>

          <p className="text-xl text-justify  font-poppins font-medium tracking-tighter text-white sm:text-xl mt-2">
            We constantly offers new movies. Watch every movie here with high
            resolution. We constantly offers new movies. Watch every movie here
            with high resolution..
          </p>
          <div className="flex items-center justify-center">
            <button
              className="h-10 px-12 py-6 mt-8 flex justify-center items-center gap-2 font-semibold rounded-[35px]  text-white bg-gradient-to-r from-red-700 to-blue-700  hover:to-cyan-500  "
              type="submit"
            >
              WATCH NOW
            </button>
          </div>
        </div>

        <div className="col-span-4 text-start mt-24 sm:mt-40 sm:ml-40">
          <img src={macbookPhoto} alt="mac" />
        </div>
      </div>
    </div>
  );
};

export default MoviePanel;
