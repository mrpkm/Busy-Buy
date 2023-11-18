import React from 'react'
import styles from './swiper.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import first from '../../images/img/000.jpg'
import sec from '../../images/img/images1.jpeg'
import thi from '../../images/img/images10.jpeg'
import fort from '../../images/img/images11.jpeg'
import fiv from '../../images/img/images12.jpeg'
import six from '../../images/img/images14.jpeg'
import sev from '../../images/img/images15.jpeg'
import eig from '../../images/img/images2.jpeg'
import nin from '../../images/img/images3.jpeg'
import ten from '../../images/img/images4.jpeg'
import ele from '../../images/img/images6.jpeg'
import twe from '../../images/img/images7.jpeg'

// banner of home
import banner1 from '../../images/Banners/fashionsale.jpg'
import banner2 from '../../images/Banners/gadget-sale.jpg'
import banner3 from '../../images/Banners/kitchen-sale.jpg'
import banner4 from '../../images/Banners/poco-m4-pro.webp'
import { Link } from 'react-router-dom';


const HomeSwiper = () => {

    return (
        <>
            <div className={styles.home}>
                <div className={styles.headerImg}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                     
                    >
                        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
         
                    </Swiper>
                </div>
                <div className={styles.product}>
                    <Link to="/views">Product</Link>
                    <h2>go to the product page</h2>
                </div>
                <div className={styles.flexType}>
                    <img src={sec} alt="" />
                    <img src={thi} alt="" />
                    <img src={fort} alt="" />
                    <img src={fiv} alt="" />
                    <img src={six} alt="" />
                    <img src={sev} alt="" />
                    <img src={eig} alt="" />
                    <img src={nin} alt="" />
                    <img src={ten} alt="" />
                    <img src={ele} alt="" />
                    <img src={twe} alt="" />
                    <img src={first} alt="" />
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default HomeSwiper;