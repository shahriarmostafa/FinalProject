import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../assets/SwiperImages/slide1.jpg';
import img2 from '../../assets/SwiperImages/slide2.jpg';
import img3 from '../../assets/SwiperImages/slide3.jpg';
import img4 from '../../assets/SwiperImages/slide4.jpg';
import img5 from '../../assets/SwiperImages/slide5.jpg';
import { Pagination } from 'swiper/modules';

export default function Swip() {
    return(
        <Swiper className='container' 
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <img src={img1}></img>
                <h4 className='swip-title'>SALADS</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2}></img>
                <h4 className='swip-title'>SOUPS</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3}></img>
                <h4 className='swip-title'>PIZZAS</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4}></img>
                <h4 className='swip-title'>DESSERTS</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5}></img>
                <h4 className='swip-title'>FRUITS</h4>
            </SwiperSlide>
        </Swiper>
    )
}