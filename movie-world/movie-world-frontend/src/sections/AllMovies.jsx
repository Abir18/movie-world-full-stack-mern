import {useEffect, useState} from "react";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/movies/all`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const requestOptions = {
    method: "PUT", // Specify the request method
    headers: {"Content-Type": "application/json"} // Specify the content type
    // body: JSON.stringify(data) // Send the data in JSON format
  };

  const addToYourLibrary = (id) => {
    // fetch(`/api/v1/movies/${id}`, requestOptions)
    //   .then((res) => res.json())
    //   .then((data) => {
    const update = movies.find((movie) => movie._id === id);
    update.addedToLibrary = !update.addedToLibrary;
    console.log(update, "update");
    setMovies(movies.map((item) => (item._id === id ? update : item)));
    //     console.log(movieList, "movies");
    //   });
  };

  const myFunc = () => {
    alert("Func");
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 to-black min-h-screen ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-oswald font-semibold tracking-tight text-white sm:text-5xl uppercase py-8">
          <span className="text-[#F5C519]">All </span>
          <span className=" text-[#0399FA]">MOVIES</span>
        </h1>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-8 sm:px-36 pb-12">
        {movies.length > 0 &&
          movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-slate-200 bg-opacity-20 rounded-xl  "
            >
              <img
                className=" w-[150px] h-[200px] sm:h-[400px] sm:w-[400px] rounded-t-xl object-cover"
                src={movie.poster}
                alt={movie.movieName}
              />
              {/* <Link to={`/movie-details/${movie._id}`}> */}
              <p
                className="text-lg text-white font-oswald font-bold tracking-wider  sm:text-xl mt-1 p-2 text-center uppercase cursor-pointer"
                onClick={() => addToYourLibrary(movie._id)}
              >
                <span>
                  {movie.movieName} ({movie.year})
                </span>
              </p>
              {/* </Link> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllMovies;
