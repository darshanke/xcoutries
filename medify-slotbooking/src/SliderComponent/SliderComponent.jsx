import "./SliderCmponet.css";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import SlideOne from "./Assets/SlideOne.png";
import SlideTwo from "./Assets/SliderTwo.png";
import SliderCard from "./SliderCard";

export default function SliderComponent() {
  return (
    <Box
      sx={{
        position: "relative",
        top: "8rem",
        marginTop: "4rem",
        textAlign: "center",
        height: '360px',
      }}
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderCard img={SlideOne} alt="firstslide" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={SlideTwo} alt="secondslide" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={SlideOne} alt="firstslide" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
