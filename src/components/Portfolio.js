import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdPageview } from "react-icons/md";

const Portfolio = () => {
  const portfolioImg =
    "https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section name="portfolio" className="w-full h-screen mt-18">
      <div className="w-full h-[700px] bg-slate-700/90 absolute">
        <img
          src={portfolioImg}
          className="object-cover w-full h-full mix-blend-overlay"
          alt="Portfolio"
        />
      </div>
      <div className="max-s-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-center uppercase text-slate-300">
            Portfolio
          </h2>
          <h3 className="py-6 text-5xl font-bold text-center">
            Look at my portfolio
          </h3>
          <p className="p-4 text-2xl text-slate-300 text-center">
            Vue.js, React, Javascript, Typescript, TailwindCSS 등 다양한
            프레임워크 언어를 사용한 프로젝트들입니다. <br />더 다양한
            프로젝트들을 기대해주세요.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-4 pt-12 text-black gap-x-8 gap-y-16 sm:pt-20">
          {portfolios.map((data, index) => (
            <div
              className={`
              bg-white shadow-2xl rounded-xl
              ${
                index === 1
                  ? "block"
                  : "hidden lg:block md:hidden sm:hidden xs:hidden"
              }
            `}
            >
              <div className="py-3 px-6">
                <h3 className="my-4 text-2xl font-bold">{data.name}</h3>
                <p className="pb-2 text-lg text-gray-900">{data.describe}</p>
                <p className="py-1 text-md text-gray-900">{data.subscribe}</p>
                <p className="pt-3 pb-1 text-md text-gray-400">{data.date}</p>
                <p className="py-1 text-md text-gray-600">{data.language}</p>
              </div>
              <div className="py-4 pl-8 bg-slate-100 shadow-md">
                <p className="flex items-center text-blue-600">
                  View Code{" "}
                  <a href={data.githubUrl} target="__blank" className="mr-10">
                    <FaCode className="w-5 ml-2" />
                  </a>
                  {data.resultUrl !== "" && (
                    <>
                      View Result
                      <a href={data.resultUrl} target="__blank">
                        <MdPageview className="w-4 ml-2" />
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const portfolios = [
  {
    name: "Disney Plus Clone App",
    describe: "디즈니 플러스 클론 애플리케이션",
    subscribe: "구글 로그인, 카테고리별 영화 정렬, 실시간 영화 검색",
    date: "2023.11.19 ~ 2023.11.21",
    language: "React, JavaScript, HTML, CSS",
    githubUrl:
      "https://github.com/hyoriKim0620/React-DisneyPlusApp-MiniProject",
    resultUrl: "https://hyorikim0620.github.io/React-DisneyPlusApp-MiniProject",
  },
  {
    name: "Flea Market App",
    describe: "중고 거래 애플리케이션",
    subscribe: "상품 업로드, 카테고리별 정렬, 찜하기, 로그인/회원가입",
    date: "2023.12.3 ~ 2023.12.4",
    language: "React, Next.js, TypeScript",
    githubUrl: "https://github.com/hyoriKim0620/Nextjs-FleaMarket-App",
    resultUrl: "",
  },
  {
    name: "Material UI Blog",
    describe: "심플한 블로그 페이지",
    subscribe: "기능보단 Material UI 컴포넌트 활용 중점으로 구현",
    date: "2023.12.17 ~",
    language: "React, JavaScript",
    githubUrl: "https://github.com/hyoriKim0620/MaterialUI-page",
    resultUrl: "https://hyorikim0620.github.io/MaterialUI-page/",
  },
];
