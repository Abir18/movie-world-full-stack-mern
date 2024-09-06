import React from "react";
import CardSlider from "../components/CardSlider/CardSlider";

// const slides = [
//   {
//     image: "https://picsum.photos/200/300",
//     title: "This is a title",
//     description: "This is a description"
//   },
//   {
//     image: "https://picsum.photos/600/500",
//     title: "This is a second title",
//     description: "This is a second description"
//   },
//   {
//     image: "https://picsum.photos/700/600",
//     title: "This is a third title",
//     description: "This is a third description"
//   },
//   {
//     image: "https://picsum.photos/500/400",
//     title: "This is a fourth title",
//     description: "This is a fourth description"
//   },
//   {
//     image: "https://picsum.photos/200/300",
//     title: "This is a fifth title",
//     description: "This is a fifth description"
//   },
//   {
//     image: "https://picsum.photos/800/700",
//     title: "This is a sixth title",
//     description: "This is a sixth description"
//   },
//   {
//     image: "https://picsum.photos/300/400",
//     title: "This is a seventh title",
//     description: "This is a seventh description"
//   }
// ];

const Upcoming = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-black h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-oswald font-semibold tracking-tight text-white sm:text-4xl uppercase pt-20">
          <span className=" text-[#0399FA]">Upcoming</span>{" "}
          <span className="text-[#F5C519]">Movies</span>
        </h1>
        <p className="text-xl font-poppins font-medium tracking-wider text-white sm:text-xl mt-2">
          We constantly offers new movies
        </p>
      </div>
      {/* <ReactCardSlider slides={slides} /> */}
      <div className="mt-4">
        <CardSlider />
      </div>
    </div>
  );
};

export default Upcoming;
