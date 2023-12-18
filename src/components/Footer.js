import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section name="footer" className="w-full px-2 text-gray-300 bg-slate-700">
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">Front-end Developer from 2021 to now</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <a
            href="https://github.com/hyoriKim0620"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
