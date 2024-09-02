import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteRight } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/components.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { reviews } from '../../helpers/Reviews';
import Stars from './Stars';

export const TestimonialSwiper = () => {

    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide>
                        <div className='container-testimonial-swiper'>
                            <FaQuoteRight className='testimonial-icon' />
                            <p className='testimonial-text'>{review.text}</p>
                            <div className='container-name-rating'>
                                <p className='testimonial-name'>- {review.name}</p>
                                <Stars rating={review.rating}/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}