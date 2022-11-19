import React from 'react';
import { useState } from 'react';
import news1 from '../asset/latest news1.jpg'
import news2 from '../asset/latest news2.jpg'
import news3 from '../asset/latest news3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const OurNews = () => {
    const [readMore1, setReadMore1] = useState(false)
    const [readMore2, setReadMore2] = useState(false)
    const [readMore3, setReadMore3] = useState(false)
    return (
        <div className='lg:px-16 px-5'>
            <h1 className='text-center text-[#011F48] font-bold lg:text-5xl text-3xl lg:mt-20 lg:mb-20 mt-10 uppercase'>OUR LATEST NEWS</h1>
            <div className='grid grid-cols-1 gap-y-5 lg:gap-y-0 my-10 lg:grid-cols-3 gap-x-16'>
                <div className=''
                    data-aos="zoom-in-right"
                    data-aos-easing="linear"
                    data-aos-delay="500"
                    data-aos-duration="5000">
                    <img src={news1} alt="" />
                    <p></p>
                    <h3 className='font-semibold'>We Bring you the best</h3>
                    <p className='text-[#ABABAB] text-justify'>{readMore1 ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi perferendis esse? Ex est placeat sint nihil expedita alias voluptatibus ullam voluptatem adipisci maiores eum ratione dolore, voluptatum excepturi dolor, laboriosam deleniti tempore impedit sequi. Harum esse quidem optio, quos vero nihil inventore est odit voluptatum deserunt veritatis autem voluptatibus, minima fugit non repellat explicabo itaque eum commodi nisi aut? Aspernatur repellendus harum culpa consequuntur ut sit officiis qui a, reprehenderit sint, delectus tempore dignissimos repellat, expedita assumenda recusandae asperiores beatae architecto. Ducimus neque tempora doloremque reprehenderit culpa animi possimus earum quos veritatis delectus, est, voluptates fugiat ex dolorum laboriosam.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus est aspernatur error repudiandae dolorum soluta suscipit. Illo blanditiis nobis, accusamus...'}</p>
                    <button onClick={() => setReadMore1(!readMore1, setReadMore2(), setReadMore3())} className='btn mt-[-10px] ml-[-16px] lg:mt-[-20px]  text-green-500 btn-link'>{!readMore1 ? 'READ MORE' : 'Show less'}</button>
                </div>

                <div className=''
                    data-aos="zoom-in-down"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                >
                    <img src={news2} alt="" />
                    <p></p>
                    <h3 className='font-semibold'>We know that buying shop</h3>
                    <p className='text-[#ABABAB] text-justify'>{readMore2 ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi perferendis esse? Ex est placeat sint nihil expedita alias voluptatibus ullam voluptatem adipisci maiores eum ratione dolore, voluptatum excepturi dolor, laboriosam deleniti tempore impedit sequi. Harum esse quidem optio, quos vero nihil inventore est odit voluptatum deserunt veritatis autem voluptatibus, minima fugit non repellat explicabo itaque eum commodi nisi aut? Aspernatur repellendus harum culpa consequuntur ut sit officiis qui a, reprehenderit sint, delectus tempore dignissimos repellat, expedita assumenda recusandae asperiores beatae architecto. Ducimus neque tempora doloremque reprehenderit culpa animi possimus earum quos veritatis delectus, est, voluptates fugiat ex dolorum laboriosam.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus est aspernatur error repudiandae dolorum soluta suscipit. Illo blanditiis nobis, accusamus...'}</p>
                    <button onClick={() => setReadMore2(!readMore2, setReadMore1(), setReadMore3())} className='btn mt-[-10px] ml-[-16px] lg:mt-[-20px]  text-green-500 btn-link'>{!readMore2 ? 'READ MORE' : 'Show less'}</button>
                </div>
                <div className=''
                    data-aos="zoom-in-left"
                    data-aos-easing="linear"
                    data-aos-delay="700"
                    data-aos-duration="5000"
                >
                    <img src={news3} alt="" />
                    <p></p>
                    <h3 className='font-semibold'>We Bring you the best</h3>
                    <p className='text-[#ABABAB] text-justify'>{readMore3 ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi perferendis esse? Ex est placeat sint nihil expedita alias voluptatibus ullam voluptatem adipisci maiores eum ratione dolore, voluptatum excepturi dolor, laboriosam deleniti tempore impedit sequi. Harum esse quidem optio, quos vero nihil inventore est odit voluptatum deserunt veritatis autem voluptatibus, minima fugit non repellat explicabo itaque eum commodi nisi aut? Aspernatur repellendus harum culpa consequuntur ut sit officiis qui a, reprehenderit sint, delectus tempore dignissimos repellat, expedita assumenda recusandae asperiores beatae architecto. Ducimus neque tempora doloremque reprehenderit culpa animi possimus earum quos veritatis delectus, est, voluptates fugiat ex dolorum laboriosam.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus est aspernatur error repudiandae dolorum soluta suscipit. Illo blanditiis nobis, accusamus...'}</p>
                    <button onClick={() => setReadMore3(!readMore3, setReadMore1(), setReadMore2())} className='btn mt-[-10px] ml-[-16px] lg:mt-[-20px]  text-green-500 btn-link'>{!readMore3 ? 'READ MORE' : 'Show less'}</button>
                </div>
            </div>
        </div>
    );
};

export default OurNews;