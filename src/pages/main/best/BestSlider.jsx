import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BestCard from './BestCard';


const StyledSwiper = styled(Swiper)`
  width: 1200px;
  height: 330px;
  display: flex;
  flex-wrap: nowrap;
`;


function BestSlider(props) {

  return (
    <StyledSwiper className='swipers'
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >

      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/></SwiperSlide>




    </StyledSwiper>
  );
}

export default BestSlider;