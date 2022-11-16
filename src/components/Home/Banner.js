import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    const banner2 = "https://img.freepik.com/free-psd/bio-food-banner-template-with-photo_23-2148211570.jpg?w=900&t=st=1666190816~exp=1666191416~hmac=3711884821cf6d8ebcbb47d0b09c27903df4b81c131c8460a5383caf2f6ef5d2"
    const banner3 = "https://img.freepik.com/free-psd/bio-food-banner-template-with-photo_23-2148211568.jpg?w=900&t=st=1666190879~exp=1666191479~hmac=9b85fec6acd169c569a2f32c2eb25ed8dedb5565039145136cc246e43a0d4928"
    const banner1 = "https://img.freepik.com/free-psd/bio-food-banner-template-with-photo_23-2148211569.jpg?w=900&t=st=1666190913~exp=1666191513~hmac=053cd58d4af5a6510a2a1848b809f2e7f10e9284098ee0581b381861246cab6a"

    return (
        <div className='flex justify-center items-center  mb-10 lg:mb-0'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full rounded-xl lg:h-[600px]' src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full rounded-xl lg:h-[600px]' src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full rounded-xl lg:h-[600px]' src={banner3} alt="" /></SwiperSlide>
            </Swiper>

        </div >
    );
};

export default Banner;