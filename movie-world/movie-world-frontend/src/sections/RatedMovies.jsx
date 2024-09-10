import React, {useEffect, useState} from "react";
import CarouselCard from "../components/CarouselCard";

// const ratedMovieList = [];

// const ratedMovieList = [
//   {
//     movieName: "Joker",
//     image:
//       "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg",
//     rating: 4.5,
//     review: 407
//   },
//   {
//     movieName: "Joker",
//     image:
//       "https://res.cloudinary.com/drayzz6ru/image/upload/v1725262419/bhie5dmrih3z1x5jo9bo.jpg",
//     rating: 4.5,
//     review: 407
//   },
//   {
//     movieName: "Joker",
//     image:
//       "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg",
//     rating: 4.5,
//     review: 407
//   },
//   {
//     movieName: "Joker",
//     image:
//       "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg",
//     rating: 4.5,
//     review: 407
//   },
//   {
//     movieName: "Joker",
//     image:
//       "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg",
//     rating: 4.5,
//     review: 407
//   }
// ];

const RatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/movies/all`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, []);

  useEffect(() => {
    // console.log(movies, "movies");
    const filteredMovies = movies.filter((movie) => movie.givenRating);
    setRatedMovies(filteredMovies);
    // console.log(ratedMovies, "ratedMovies");
  }, [movies]);

  return (
    <div className="bg-gradient-to-r from-black to-slate-900 min-h-screen sm:h-[120vh] ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-oswald font-semibold tracking-tight text-white sm:text-5xl uppercase pt-16">
          <span className="text-[#F5C519]">MOVIES </span>
          <span className=" text-[#0399FA]">YOU RATED</span>
        </h1>
      </div>
      <div className="mt-12">
        <CarouselCard
          movieList={movies}
          setMovies={setMovies}
          watch={true}
          // onClick={updateWatchList}
        />
      </div>
    </div>
  );
};

export default RatedMovies;

// const movieList = [
//     {
//       movieName: "Joker",
//       image:
//         "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg",
//       rating: 4.5,
//       review: 407
//     }
//   ];

{
  /* <div className="slider-container w-[95%] m-auto ">
      {movieList.map((movie) => (
        <Slider {...settings} key={movie.movieName}>
          <div className="flex flex-col items-start gap-y-2 mt-2 ml-4">
            <p className="text-xl  font-roboto font-medium tracking-tight text-white sm:text-2xl mt-2 text-center">
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
              className="h-10 px-12 py-6  flex justify-center items-center gap-2 font-semibold rounded-[35px]  text-white bg-gradient-to-r from-cyan-500 to-blue-800 hover:from-cyan-900"
              type="submit"
            >
              <GoPlus size="24px" /> WATCH LIST
            </button>
            <p className="flex text-sm  font-roboto font-medium tracking-wider text-white sm:text-sm mt-2 text-center hover:cursor-pointer">
              <LuPlayCircle size="20px" className="mb-2 mr-2" />
              TRAILER
            </p>
          </div>
        </Slider>
      ))}
    </div> */
}

{
  /* <div className="w-[400px] h-[500px] bg-slate-800 ">
          <img
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg"
            className="w-full h-[330px]"
          />
          <p className="text-xl font-roboto font-medium tracking-wider text-white sm:text-2xl mt-2 text-center">
            JAWAN
          </p>
        </div>
        <div className="w-[400px] h-[500px] bg-slate-800">
          <img
            // src="https://m.media-amazon.com/images/I/816A4jWNyRL._AC_UF894,1000_QL80_.jpg"
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg"
            alt=""
            className="w-full h-[330px]"
          />
          <p className="text-xl font-poppins font-medium tracking-wider text-white sm:text-xl mt-2 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-[300px] h-[500px] bg-[#13171A] rounded-xl">
          <div className="rounded-xl">
            <img src={image3} alt="" className="w-full h-[300px] rounded-xl" />
          </div>
          <div className="flex flex-col items-start gap-y-2 mt-2 ml-4">
            <p className="text-xl  font-roboto font-medium tracking-tight text-white sm:text-2xl mt-2 text-center">
              JOKER
            </p>
            <p className="flex justify-center items-center text-sm  font-roboto font-medium tracking-wider text-white sm:text-xl mt-2 text-center">
              <FaStar size="16px" color="yellow" className="mb-2" />{" "}
              <span className="ml-1 mb-1 ">4.5(407)</span>
              <IoMdStarOutline
                size="24px"
                color="cyan"
                className="mb-2 ml-3 hover:cursor-pointer"
              />
            </p>
            <button
              className="h-10 px-12 py-6  flex justify-center items-center gap-2 font-semibold rounded-[35px]  text-white bg-gradient-to-r from-cyan-500 to-blue-800 hover:from-cyan-900"
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
        <div className="w-[300px] h-[500px] bg-slate-800">
          <img src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg" />
        </div>
        <div className="w-[300px] h-[500px] bg-slate-800">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS092bYc1jt3ROCJQ0c-s-1JRWHixFD3Ysc4g&s"
            alt=""
            className=" h-[330px]"
          />
        </div>
        <div className="w-[300px] h-[300px] bg-slate-800">
          <h3>6</h3>
        </div>
        <div className="w-[300px] h-[300px] bg-slate-800">
          <h3>7</h3>
        </div>
        <div className="w-[300px] h-[300px] bg-slate-800">
          <h3>8</h3>
        </div> */
}
