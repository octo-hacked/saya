import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import { logos } from "@/constants/showcase";

const LogoSlider = () => {

  return (
    <div className="w-[65vw] mx-auto py-4">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={4}   
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        loop={true}
        centeredSlides={false}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-start rounded-lg ">
            <img src={logo} alt={`Band Logo ${index + 1}`} className="h-24 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;

