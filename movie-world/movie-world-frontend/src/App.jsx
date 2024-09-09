import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import MovieDetails from "./sections/MovieDetails";
import RatedMovies from "./sections/RatedMovies";
import {WatchList} from "./sections/WatchList";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {/* <Navbar /> */}
          <Layout />
          <Footer />
        </>
      )
    },
    {
      path: "/movie-details/:id",
      element: (
        <>
          <Navbar />
          <MovieDetails />
          <Footer />
        </>
      )
    },
    {
      path: "/movies",
      element: (
        <>
          <Navbar />
          <RatedMovies />
          <Footer />
        </>
      )
    },
    {
      path: "/watch-list",
      element: (
        <>
          <Navbar />
          <WatchList />
          <Footer />
        </>
      )
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
