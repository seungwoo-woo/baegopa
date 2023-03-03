import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './BestSlider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import BestCard from './BestCard';
// <<<<<<< HEAD

// TODO: 상민님 확인 필요
// const StyledSwiper = styled(Swiper)`
//   width: 1250px;
//   height: 400px;
//   display: flex;
//   margin-top: -10px;
//   flex-wrap: nowrap;
//   .swiper-button-next{
//   background-image: url('../img/mingcute_bowl-line.png');
//   }
//   .swiper-button-next, .swiper-button-prev {
//     width: 35px;
//     height: 50px;
//     color: #EEEEEE; /* 원하는 색깔로 변경 */
//     background-color: #bdbdbd5c;
//   }
//   .swiper-container {
//   height: 100%;

// }
// `;


import Best from './Best';


function BestSlider(props) {
  
  return (

    <>
      <Best />
      
      <Swiper
        className={styles.swipermain}
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={4}
        navigation={{ prevEl: `.${styles['prev-button']}`, nextEl: `.${styles['next-button']}` }}
        pagination={{ clickable: true, }}
      >
        <SwiperSlide className={styles.swiperi}><BestCard /></SwiperSlide>
        <SwiperSlide className={styles.swiperi}><BestCard /></SwiperSlide>
        <SwiperSlide className={styles.swiperi}><BestCard /></SwiperSlide>
        <SwiperSlide className={styles.swiperi}><BestCard /></SwiperSlide>
        <SwiperSlide className={styles.swiperi}><BestCard /></SwiperSlide>
        <SwiperSlide className={styles.swiperi}><BestCard /></SwiperSlide>
        <SwiperSlide className={styles.swiperi}><BestCard /></SwiperSlide>
        <SwiperSlide className={styles.swiperi}><BestCard /></SwiperSlide>

        <button className={styles['prev-button']}></button>
        <button className={styles['next-button']}></button>
      </Swiper>
    </>

  );
}

export default BestSlider;
