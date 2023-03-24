import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../assets/images/banner/banner-1.png";
import Slide2 from "../../assets/images/banner/banner-2.png";
import Slide3 from "../../assets/images/banner/banner-3.png";
import Slide4 from "../../assets/images/banner/banner-4.png";
import "./index.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="banner__slide"
    >
      <SwiperSlide>
        <img src={ Slide1 } alt="slide-1" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={ Slide2 } alt="slide-2" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={ Slide3 } alt="slide-3" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={ Slide4 } alt="slide-4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
