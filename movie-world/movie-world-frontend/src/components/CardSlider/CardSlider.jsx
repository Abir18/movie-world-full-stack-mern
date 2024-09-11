import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CardSlider.css";

// import required modules
import {Link} from "react-router-dom";
import {EffectCoverflow, Pagination} from "swiper/modules";

// const upcomingMovies = [
//   {
//     movieName: "Avatar",
//     image: "https://i.ebayimg.com/images/g/CwEAAOSwv4xf5cdv/s-l1200.jpg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Avatar 2",
//     image:
//       "https://m.media-amazon.com/images/I/71hGGgSVC1L._AC_UF1000,1000_QL80_.jpg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Jawan",
//     image:
//       "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Interestellar",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Avatar",
//     image: "https://i.ebayimg.com/images/g/CwEAAOSwv4xf5cdv/s-l1200.jpg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Avatar 2",
//     image:
//       "https://m.media-amazon.com/images/I/71hGGgSVC1L._AC_UF1000,1000_QL80_.jpg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Jawan",
//     image:
//       "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Interestellar",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Avatar",
//     image: "https://i.ebayimg.com/images/g/CwEAAOSwv4xf5cdv/s-l1200.jpg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Avatar 2",
//     image:
//       "https://m.media-amazon.com/images/I/71hGGgSVC1L._AC_UF1000,1000_QL80_.jpg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Jawan",
//     image:
//       "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1500,height=1000,format=auto/m/3be6/8bc0/eb20/8bfc/0f0c/f534/b980/3b5f/37bd/d77d/d77d.jpeg",
//     rating: 5,
//     review: 200
//   },
//   {
//     movieName: "Interestellar",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
//     rating: 5,
//     review: 200
//   }
// ];

export default function CardSlider({upcomingMovies}) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="swiper "
      >
        {upcomingMovies.map((movie) => (
          <SwiperSlide
            key={movie._id}
            className="bg-slate-200 bg-opacity-20 rounded-xl "
          >
            <img
              className=" w-[150px] h-[200px] sm:h-[400px] sm:w-full rounded-t-xl"
              src={movie.poster}
              alt={movie.movieName}
            />
            <p className="text-lg font-oswald font-bold tracking-wider text-white sm:text-3xl mt-2 text-center uppercase">
              <Link to={`/movie-details/${movie._id}`}>{movie.movieName}</Link>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
