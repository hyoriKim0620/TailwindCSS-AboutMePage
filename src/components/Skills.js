import React from "react";
import { FaCheck } from "react-icons/fa";

const Skills = () => {
  return (
    <section name="skills" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center mb-10">Skills</h2>
        <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div className="flex">
              <FaCheck className="mt-1 mr-3 text-blue-600 w-7" />
              <div>
                <h3 className="text-lg font-bold">{skill.language}</h3>
                <p className="pt-2 pb-4 text-lg">{skill.subscribe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

const skills = [
  {
    language: "React",
    subscribe:
      "React에 대한 기본적인 구조와 알고리즘 이해와 다양한 상태 관리 라이브러리에 대한 이해와 활용 경험, React 라이브러리로 미니 프로젝트 제작 가능",
  },
  {
    language: "Vue.js",
    subscribe:
      "Vue의 라이프사이클 훅에 대한 이해와 Vuetify 라이브러리를 활용하여 프로젝트 개발, 배포 및 유지보수 가능",
  },
  {
    language: "Javascript",
    subscribe:
      "JavaScript와 Bootstrap 사용으로 반응형 웹 페이지, 동적 웹 페이지 구현 가능",
  },
  {
    language: "Typescript",
    subscribe: "React와 활용하여 간단한 프로젝트 제작 가능",
  },
  {
    language: "Java",
    subscribe: "Android Studio 로 Application 제작 경험",
  },
  {
    language: "Python",
    subscribe: "기본적인 문법에 대한 숙지와 알고리즘 이해, 구현 가능",
  },
];
