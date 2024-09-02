import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/components.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const AutoSwiper = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='container-banner-swiper1'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container-banner-swiper2'>
                        <h2>El mejor servicio para tu fiesta</h2>
                        <p className='subtitle-swiper'>Cumpleaños, Bodas, Aniversarios y más</p>
                        <p className='text-swiper'>Hace tu consulta, nosotros te asesoramos</p>
                        <div className='swiper-separator'>
                            <img src={require(`../../images/separador-2.png`)} className='banner-separator' />
                        </div>
                        <Link to='/' className='home-link swiper-link' style={{textDecoration: 'none'}}>Eleginos</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container-banner-swiper3'>
                        <h2>Día del Maestro</h2>
                        <p className='subtitle-swiper'>Veni a celebrar con nosotros</p>
                        <div className='swiper-separator'>
                            <img src={require(`../../images/separador-2.png`)} className='banner-separator' />
                        </div>
                        <p className='text-swiper'>Si sos maestro tenes 10% de descuento</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}