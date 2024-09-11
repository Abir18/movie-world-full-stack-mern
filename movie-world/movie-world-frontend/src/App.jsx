import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import AllMovies from "./sections/AllMovies";
import Footer from "./sections/Footer";
import MovieDetails from "./sections/MovieDetails";
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
          <AllMovies />
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
    <div className="overflow-x-hidden ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
