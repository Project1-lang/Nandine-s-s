import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/tailwindcss.png";
import meter5 from "../assets/img/reactjs.png";
import meter6 from "../assets/img/figma.png";
import meter7 from "../assets/img/Indesign.png";
import meter8 from "../assets/img/bootstrap.png";
import meter9 from "../assets/img/nodejs.png";
import "./Skills.css"
function Skill3d() {
  return (
    <div className="skill_container">
      <h1 className="heading">My Skills</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={meter1} class="skills_icons" alt="slide_image" />
          <h1>HTML5</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={meter2} class="skills_icons" alt="slide_image" />
          <h1>HTML5</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={meter3} class="skills_icons" alt="slide_image" />
          <h1>HTML5</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={meter4} class="skills_icons" alt="slide_image" />
          <h1>HTML5</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={meter5} class="skills_icons" alt="slide_image" />
          <h1>HTML5</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={meter6} class="skills_icons" alt="slide_image" />
          <h1>HTML5</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={meter7} class="skills_icons" alt="slide_image" />
          <h1>HTML5</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={meter8} class="skills_icons" alt="slide_image" />
          <h1>HTML5</h1>
        </SwiperSlide>

        <SwiperSlide>
          <img src={meter9} class="skills_icons" alt="slide_image" />
          <h1>HTML5</h1>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Skill3d;
