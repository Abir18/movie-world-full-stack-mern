import React from "react";
import AddedMovies from "./sections/AddedMovies";
import Hero from "./sections/Hero";
import MoviePanel from "./sections/MoviePanel";
import RatedMovies from "./sections/RatedMovies";
import Upcoming from "./sections/Upcoming";
import {WatchList} from "./sections/WatchList";

const Layout = () => {
  return (
    <div>
      <Hero />
      <Upcoming />
      <MoviePanel />
      <RatedMovies />
      <WatchList />
      <AddedMovies />
    </div>
  );
};

export default Layout;
