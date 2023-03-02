import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import BestCard from './BestCard';


const StyledSwiper = styled(Swiper)`
  width: 1250px;
  height: 400px;
  display: flex;
  margin-top: -10px;
  flex-wrap: nowrap;
  .swiper-button-next{
  background-image: url('../img/mingcute_bowl-line.png');
  }
  .swiper-button-next, .swiper-button-prev {
    width: 35px;
    height: 50px;
    color: #EEEEEE; /* 원하는 색깔로 변경 */
    background-color: #bdbdbd5c;
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
      // pagination={{ clickable: true }}
    >

      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>
      <SwiperSlide className='swiperi'><BestCard/>#요리 종류 해시태그 <br/>요리 제목 <br/>닉네임</SwiperSlide>




    </StyledSwiper>
  );
}

export default BestSlider;