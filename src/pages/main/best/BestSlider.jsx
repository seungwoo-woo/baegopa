import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './BestSlider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BestCard from './BestCard';


import Best from './Best';
import CardList from '../../../components/CardList';


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
        pagination={{ clickable: true }}
      >
        <SwiperSlide className={styles.swiperi}></SwiperSlide>

        <button className={styles['prev-button']}></button>
        <button className={styles['next-button']}></button>
      </Swiper>
    </>

  );
}

export default BestSlider;
