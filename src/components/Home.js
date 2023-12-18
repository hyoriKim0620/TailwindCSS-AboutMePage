import React from "react";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";

const Home = () => {
  return (
    <section name="home" className="flex w-full h-screen bg-zinc-100">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center w-full px-2 py-8 md:items-start">
          <p className="text-2xl">It's a site that briefly introduces me.</p>
          <h1 className="py-3 text-5xl font-bold dm:text-7xl">About me</h1>
          <p className="text-2xl">GitHub Site View Right Now</p>

          <button className="py-3 px-6 sm:w-[60%] my-4">
            <a
              href="https://github.com/hyoriKim0620"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </button>
        </div>
        <div className="flex flex-col justify-center px-2">
          <h2 className="font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
            Easily download app <br className="hidden sm:block" />
            Google & Apple
          </h2>
          <p className="text-[18px] leading-[30.8px] max-2-[470px] mt-5">
            I never dreamed about success, I worked for it.
            <div className="text-right">- Estee Lauder</div>
          </p>
          <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
            <img
              src={apple}
              alt="apple_play"
              className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
            />
            <img
              src={google}
              alt="google_play"
              className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
