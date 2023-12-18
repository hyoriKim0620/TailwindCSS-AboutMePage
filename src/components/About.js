import React from "react";
import { PiTagSimpleDuotone } from "react-icons/pi";

const About = () => {
  return (
    <section name="about" className="w-full h-screen">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-left">김효리 Kim Hyori</h2>
          <p className="py-6 text-xl text-gray-500 text-left leading-loose">
            2001.06.20 (만 22세) <br />
            경력 : 2021.12.27 ~ 2023.10.31 (약 2년)
          </p>
          <h3 className="pt-5 pb-2 text-2xl font-bold text-left">실무 경험</h3>
          <div className="py-3 text-xl text-black-700 text-left leading-loose">
            <div className="flex items-center py-3">
              <PiTagSimpleDuotone size={40} className="mr-4" />
              Vue.js, Javascript, jQuery를 이용한 앱 내 웹뷰 구현(반응형)
              <br />
              컴포넌트 기반의 프로젝트, Vuex 활용(state, getter, action,
              mutation)
            </div>

            <div className="flex items-center py-3">
              <PiTagSimpleDuotone size={40} className="mr-4" />
              태블릿으로 주문하는 시스템의 POS 연동 데이터를 받아서 각 포스별
              처리 로직 구현
            </div>
            <div className="flex items-center py-3">
              <PiTagSimpleDuotone size={40} className="mr-4" />
              e-commerce 서비스의 Admin 페이지 프론트 작업 (ex. 주문관리,
              반품ㆍ환불관리)
            </div>
            <div className="flex items-center py-3">
              <PiTagSimpleDuotone size={40} className="mr-4" />
              Node.js를 이용한(router.get, router.post 등) 간단한 데이터 처리 및{" "}
              <br />
              무인 냉장고 관련 주문, 주문내역 페이지 프론트 개발
            </div>
            <div className="flex items-center py-3">
              <PiTagSimpleDuotone size={40} className="mr-4" />
              무인 냉장고 서비스 관련 Admin 페이지 프론트 작업 (ex.
              재고관리(RF태그와 선결제형 구분), 유통기한 임박 할인 관리)
            </div>
            <div className="flex items-center py-3">
              <PiTagSimpleDuotone size={40} className="mr-4" />
              UI/UX 기획 및 구조 설계
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
