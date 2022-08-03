import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { Lazy, FreeMode, Navigation, Thumbs } from "swiper";

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
        modules={[Lazy, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} width='910px'>
            <img src={item.url} />
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
        style={{marginTop: "-8%"}}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
