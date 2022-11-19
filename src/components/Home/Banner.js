import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import bannar1 from '../../components/asset/banner.jpg'
import bannar3 from '../../components/asset/banner3.jpg'
import bannar4 from '../../components/asset/banner4.jpg'
import bannar5 from '../../components/asset/banner6.jpg'
import bannar6 from '../../components/asset/banner7.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {

    return (
        <div className='flex justify-center items-center  mb-3 lg:mb-0'>
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
                <SwiperSlide><img className='w-full  lg:h-[650px] h-48' src={bannar6} alt="" />
                </SwiperSlide>
                <SwiperSlide><img className='w-full  lg:h-[650px] h-48' src={bannar1} alt="" />
                </SwiperSlide>
                <SwiperSlide><img className='w-full  lg:h-[650px] h-48' src={bannar4} alt="" />
                </SwiperSlide>
                <SwiperSlide><img className='w-full  lg:h-[650px] h-48' src={bannar3} alt="" />
                </SwiperSlide>
                <SwiperSlide><img className='w-full  lg:h-[650px] h-48' src={bannar5} alt="" />
                </SwiperSlide>
            </Swiper>

        </div >
    );
};

export default Banner;