import {FiUser} from "react-icons/fi";
import {IoIosArrowDown} from "react-icons/io";
import {Link} from "react-router-dom";

const navigation = [
  {name: "Get Pro", href: "#"},
  {name: "Movies", href: "/movies"},
  {name: "Watch-list", href: "/watch-list"}
];

const Navbar = ({bg}) => {
  console.log(bg, "bg");
  return (
    <nav
      aria-label="Global"
      className={`flex items-center justify-between text-white p-6 lg:px-8  ${
        bg ? "" : "bg-black"
      } `}
    >
      <div className="flex ml-2 sm:ml-32">
        <Link to="/" className="-m-1.5 p-1.5">
          <h1 className="font-archivo font-bold leading-none">
            <span className="text-[#0399FA] text-3xl leading-none">MOVIE</span>{" "}
            <br />
            {[...Array(18)].map((_, index) => (
              <span key={index}>&nbsp;</span>
            ))}
            World
          </h1>
        </Link>
      </div>
      <div className="hidden lg:flex ">
        {/* <input
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-md leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm font-bold"
          type="text"
          aria-label="Filter projects"
          placeholder="Search movies"
        >
         
        </input> */}

        {/* ================== */}

        <div className="bg-white border-2  shadow p-2 relative rounded-xl flex w-[500px] ml-6">
          <span className="w-auto flex justify-end  items-center text-gray-500 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
          <input
            name="episodequery"
            id="title"
            className="border-white outline-none border-0 w-full rounded-xl text-slate-900"
            type="text"
            placeholder="Search movies"
          />
          <button className="bg-gray-500 hover:bg-gray-700 rounded-xl text-white text-xl px-6">
            <p className="font-semibold text-xs">All</p>
          </button>
        </div>
      </div>
      <div className="flex ">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
        </button>
      </div>
      <div className="hidden lg:flex justify-center items-center lg:gap-x-12 ml-16">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-xl font-semibold leading-6 first:text-[#d6c810]"
          >
            {item.name}
          </Link>
        ))}
        <button
          className="h-10 px-6 py-7 flex justify-center items-center gap-2 font-semibold rounded-[35px]  text-white bg-gradient-to-r from-cyan-500 to-blue-800"
          type="submit"
        >
          EN <IoIosArrowDown />
        </button>
      </div>
      <div className=" lg:flex lg:justify-end ml-8 mr-10">
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          <FiUser size="30px" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
