import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BestCard from './BestCard';


const StyledSwiper = styled(Swiper)`
  width: 1200px;
  height: 330px;
  display: flex;
  flex-wrap: nowrap;
  .swiper-button-next, .swiper-button-prev {
    color: red; /* 원하는 색깔로 변경 */
  }
  .swiper-container {
  height: 100%;

}
`;


function BestSlider(props) {

  return (
    <StyledSwiper className='swipers'
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
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