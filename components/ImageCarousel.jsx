import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/free-mode";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { Autoplay, Lazy, FreeMode, Navigation, Thumbs } from "swiper";

export default function ImageCarousel({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        loop={true}
        lazy={true}
        spaceBetween={10}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Autoplay, Lazy, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} width='100%' style={{maxHeight: "450px"}}>
            <img data-src={item.url} className="swiper-lazy"/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{marginTop: "20px"}}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} style={{maxHeight: "100px", border: "1px solid gray"}} >
            <img src={item.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
