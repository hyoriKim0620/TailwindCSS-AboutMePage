import React, { useState } from "react";

const Hobby = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <section name="myhobby" className="w-full my-24 text-white bg-gray-600">
      <div className="max-2-6xl px-5 mx-auto text-center py-12 pt-16">
        <h2 className="text-4xl font-bold">My Hobby</h2>
        <p className="pt-8 pb-4 text-2xl text-white leading-[35px]">
          I have various hobbies.
          <br />
          Three of them are listening to music, watching a movie that I enjoyed,
          and knitting.
          <br /> I want to try some dynamic activities like climbing and hiking!
        </p>

        <div className="flex flex-col mt-16 md:flex-row md:space-x-6">
          {hobby.map((hobby, index) => (
            <div
              key={hobby.name}
              className={`flex-col items-center rounded-lg bg-gray-100/30 md:w-1/3 shadow-xl
                  relative
                  ${index !== 0 ? "hidden md:flex" : "flex"}
                  ${
                    hobby.engName === "movie" && isClicked
                      ? "transform translate-y-[-10px] duration-100"
                      : ""
                  }
              `}
            >
              {hobby.engName === "movie" && isClicked && (
                <div className="absolute left-2 top-2 p-1 rounded-md bg-gradient-to-b from-yellow-200 to-yellow-500">
                  My Best
                </div>
              )}
              <img
                src={hobby.imageUrl}
                className="w-full h-full max-h-[300px] rounded-lg"
                alt="hobby"
              />
              <div className="bg-gray-400/90 w-full -m-3 py-2">
                <h5 className="text-lg font-bold text-neutral-700">
                  {hobby.name}
                </h5>
                <p className="text-sm min-h-[60px] flex justify-center items-center px-1">
                  {hobby.describe}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleClick}
          className="px-6 py-3 my-8 duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110 hover:text-gray-300"
        >
          What is my favorite?
        </button>
      </div>
    </section>
  );
};

export default Hobby;

const hobby = [
  {
    engName: "music",
    name: "음악 듣기",
    describe:
      "I usually listen to emotional ballads and exciting dance songs, but I listen to classical songs when I go to exams or interviews.",
    imageUrl:
      "https://images.unsplash.com/photo-1519619091416-f5d7e5200702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fCVFQyU5RCU4QyVFQyU5NSU4NSUyMCVFQiU5MyVBMyVFQSVCOCVCMHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    engName: "movie",
    name: "재밌게 본 영화 다시 보기",
    describe:
      "I like watching new movies, but I prefer watching fun movies again!",
    imageUrl:
      "https://images.unsplash.com/photo-1622455331488-3b6d5cc4f18c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    engName: "knitting",
    name: "뜨개질 하기",
    describe:
      "I especially enjoy knitting. When it comes to knitting, it's more fun to knit than to complete.",
    imageUrl:
      "https://images.unsplash.com/photo-1632649027900-389e810204e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVCJTlDJUE4JUVBJUIwJTlDJUVDJUE3JTg4fGVufDB8fDB8fHww",
  },
];
