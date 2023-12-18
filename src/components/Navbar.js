import React, { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="w-screen h-[80px] z-10 bg-blue-100 fixed drop-shadow-lg">
      <div className="flex items-center justify-between w-full h-full px-10">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl">About Me</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="myhobby" smooth={true} duration={500}>
                Hobby
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden pr-4 md:flex">
          <button className="mr-4 text-slate-600 bg-transparent border-none">
            Sign in
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="mr-4 md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes /> : <FaAlignJustify />}
        </div>
      </div>
      <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <li className="w-full border-b-2  border-zinc-400">
          <Link
            onClick={() => setNav(false)}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="w-full border-b-2  border-zinc-400">
          <Link
            onClick={() => setNav(false)}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="w-full border-b-2  border-zinc-400">
          <Link
            onClick={() => setNav(false)}
            to="portfolio"
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="w-full border-b-2  border-zinc-400">
          <Link
            onClick={() => setNav(false)}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="w-full border-b-2  border-zinc-400">
          <Link
            onClick={() => setNav(false)}
            to="myhobby"
            smooth={true}
            duration={500}
          >
            Hobby
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="px-8 py-3 mb-5 text-slate-600 bg-transparent">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
