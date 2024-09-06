// import coverImage from "./assets/images/cover.jpg";

import AddedMovies from "./sections/AddedMovies";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MoviePanel from "./sections/MoviePanel";
import RatedMovies from "./sections/RatedMovies";
import Upcoming from "./sections/Upcoming";
import {WatchList} from "./sections/WatchList";

const App = () => {
  return (
    <div>
      <Hero />
      <Upcoming />
      <MoviePanel />
      <RatedMovies />
      <WatchList />
      <AddedMovies />
      <Footer />
    </div>
  );
};

export default App;
