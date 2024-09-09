import React from "react";
import Navbar from "../components/Navbar";

const Hero = () => {
  // const [bg, setBg] = useState(true);
  return (
    <div className="bg-[url('assets/images/cover.jpg')] bg-cover h-[70vh] sm:h-screen ">
      <Navbar bg={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="text-start mt-20 ml-6 sm:mt-40 sm:ml-40">
          <h1 className="text-5xl font-oswald font-semibold   text-[#0399FA] sm:text-6xl uppercase">
            Best Way of Entertaiment
          </h1>
          <h1 className="text-2xl font-oswald font-semibold tracking-tight text-white sm:text-4xl uppercase mt-8">
            Movies as you demand at usd
          </h1>
          <h1 className="text-2xl font-oswald font-semibold tracking-tight text-[#F5C519] sm:text-4xl uppercase mt-2">
            10/month
          </h1>
        </div>
        {/* <div className=" mt-2 sm:mt-40"> */}
        {/* <Slider /> */}
        {/* <HeroSlider /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
