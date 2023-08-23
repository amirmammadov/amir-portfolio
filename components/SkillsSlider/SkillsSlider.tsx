"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Image from "next/image";

import "swiper/scss";
import "swiper/scss/autoplay";

import "@/sass/layout/_skills.scss";

const sliderImgSize = 140;

const SkillsSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={1200}
      spaceBetween={270}
      slidesPerView={4}
      className="skills__content"
      breakpoints={{
        200: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 350,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 190,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 270,
        },
      }}
    >
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/js.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/react.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/node2.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/next.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/mui.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/css4.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/html.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/ts.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/redux.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/mongodb.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
      <SwiperSlide className="skills__content__item">
        <Image
          src="/assets/git.png"
          alt="skills"
          width={sliderImgSize}
          height={sliderImgSize}
          className="skills__content__item__img"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SkillsSlider;
