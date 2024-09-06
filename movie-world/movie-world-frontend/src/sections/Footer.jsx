import React from "react";
import {CiFacebook, CiInstagram, CiTwitter} from "react-icons/ci";

const Footer = () => {
  return (
    <div className=" bg-black  text-white px-24">
      <footer className="bg-muted py-10 text-muted-foreground">
        <div className="container grid grid-cols-1 gap-10 sm:grid-cols-3 sm:pl-32">
          <div className="space-y-4">
            <div href="#" className="flex items-center">
              <span className=" font-oswald font-bold uppercase">
                Upcoming Movies
              </span>
            </div>
            <div className="space-y-1 text-sm">
              <div href="#" className="cursor-pointer hover:underline">
                JAWAN
              </div>
              <div href="#" className=" cursor-pointer hover:underline">
                The Vampire Diaries
              </div>
              <div href="#" className="cursor-pointer hover:underline">
                BARBIE
              </div>
              <div href="#" className="cursor-pointer hover:underline">
                Teen all
              </div>
              <div href="#" className="cursor-pointer hover:underline">
                NCIS
              </div>
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-6 sm:grid-cols-1">
            <div className="space-y-2">
              <span className=" font-oswald font-bold uppercase">
                Additional Pages
              </span>
              <ul className="space-y-1 text-sm ">
                <li>
                  <div href="#" className="cursor-pointer hover:underline">
                    Terms & Conditions
                  </div>
                </li>
                <li>
                  <div href="#" className="cursor-pointer hover:underline">
                    Privacy Policy
                  </div>
                </li>
                <li>
                  <div href="#" className="cursor-pointer hover:underline">
                    Cookie Policy
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <div className="flex ">
              <a href="#" className="-m-1.5 p-1.5">
                <h1 className="font-archivo font-bold leading-none">
                  <span className="text-[#0399FA] text-2xl leading-none">
                    MOVIE
                  </span>{" "}
                  <br />
                  {[...Array(15)].map((_, index) => (
                    <span key={index}>&nbsp;</span>
                  ))}
                  World
                </h1>
              </a>
            </div>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              est sed vero odio mollitia, perspiciatis, placeat cumque
            </p>
            <div className="pt-4 flex items-center  space-x-4 ">
              <div
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <CiTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </div>
              <div
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <CiFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </div>
              <div
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <CiInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-10 border-t   pt-6 text-center text-sm">
          <p>Copyright &copy; 2024 movieworld All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
