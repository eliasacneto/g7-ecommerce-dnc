import { Swiper, SwiperSlide } from "swiper/react";
import Slide0 from "../../assets/images/banner/banner_original.png";
import Slide1 from "../../assets/images/banner/banner-1.jpg";
import Slide2 from "../../assets/images/banner/banner-2.jpg";
import Slide3 from "../../assets/images/banner/banner-3.jpg";
import Slide4 from "../../assets/images/banner/banner-4.jpg";
import "./index.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
const Banner = () => {
  return (
    <div className="banner__slide">
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
      className=""
    >
      <SwiperSlide>
        <img src={ Slide0 } alt="slide-0" />
      </SwiperSlide>

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

    </div>
    
  );
};

export default Banner;
