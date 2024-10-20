
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';


// import { Pagination } from 'swiper/modules';
// import { Box, Hidden } from '@mui/material';
// import SliderCard from './SliderCard';
// import SlideOne from './Assets/SlideOne.png'
// import SlideTwo from './Assets/SliderTwo.png'

// export default function SliderComponent() {
//   return (
//     <Box sx={{width: '1150px', overflow: 'hidden',}}>
//       <Swiper 
//       slidesPerView={2}
//      spaceBetween={3}
//      modules={[Pagination]}
//      loop={true}
//      pagination={{ clickable: true }}
     
//       >
//         <SwiperSlide><SliderCard img={SlideOne} alt={SlideOne} /></SwiperSlide>
//         <SwiperSlide><SliderCard img={SlideOne} alt={SlideOne} /></SwiperSlide>
//       </Swiper>
//     </Box>
//   );
// }
import './SliderCmponet.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';
import SliderCard from './SliderCard';
import SlideOne from './Assets/SlideOne.png';
import SlideTwo from './Assets/SliderTwo.png';

export default function SliderComponent() {
  return (
    <Box sx={{ width: { xs: '100%', sm: '1150px' }, overflow: 'hidden' }}>
      <Swiper 
      width='100%'
       slidesPerView={3}
       spaceBetween={3}
       modules={[Pagination,Autoplay]}
       autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
       loop={true}
       pagination={{ clickable: true }}

      >
        <SwiperSlide>
          <SliderCard img={SlideOne} alt="Slide One" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={SlideTwo} alt="Slide Two" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={SlideOne} alt="Slide One" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}


