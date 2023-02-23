import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card } from 'react-bootstrap';

const StyledSwiper = styled(Swiper)`
  width: 1200px;
  height: 300px;
`;
const CoveredImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/><Card /></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>
      <SwiperSlide className='swiperi'><CoveredImage  src='https://via.placeholder.com/285x285'/></SwiperSlide>



    </StyledSwiper>
  );
}

export default BestSlider;