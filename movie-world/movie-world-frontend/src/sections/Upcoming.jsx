import React from "react";
import CardSlider from "../components/CardSlider/CardSlider";

const Upcoming = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-black h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-oswald font-semibold tracking-tight text-white sm:text-4xl uppercase pt-20">
          <span className=" text-[#0399FA]">Upcoming</span>{" "}
          <span className="text-[#F5C519]">Movies</span>
        </h1>
        <p className="text-xl font-poppins font-medium tracking-wider text-white sm:text-xl mt-2 max-sm:px-8">
          We constantly offers new movies
        </p>
      </div>

      <div className="mt-4">
        <CardSlider />
      </div>
    </div>
  );
};

export default Upcoming;
