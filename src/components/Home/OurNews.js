import React from 'react';
import { useState } from 'react';
import news1 from '../asset/latest news1.jpg'
import news2 from '../asset/latest news2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const OurNews = () => {
    const news3 = 'https://img.freepik.com/free-photo/man-vaping-electronic-cigarette_158595-2893.jpg?w=740&t=st=1672121060~exp=1672121660~hmac=1317a20e05993e0618cc461f590e9d24aa3c754aa69d2d821cecf4e31c0ba5a2'
    const [readMore1, setReadMore1] = useState(false)
    const [readMore2, setReadMore2] = useState(false)
    const [readMore3, setReadMore3] = useState(false)
    return (
        <div className='flex justify-center  lg:px-16 mb-10'>
            <div >
                <h1 className='text-center w text-[#011F48] font-bold lg:text-5xl text-2xl lg:mt-5 lg:mb-20 mt-3 uppercase'>OUR LATEST NEWS</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16  gap-y-5 lg:gap-y-0 mt-10'>
                    <div
                        data-aos="zoom-in-right"
                        data-aos-easing="linear"
                        data-aos-delay="500"
                        data-aos-duration="5000">
                        <img className=' lg:max-w-full' src={news1} alt="" />

                        <div className='flex justify-center '>
                            <div className=' lg:max-w-full'>
                                <h3 className='font-semibold my-2'>We Bring you the best</h3>
                                <div className='flex justify-center items-center lg:w-full'>
                                    <p className='text-[#ABABAB] text-justify'>{readMore1 ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi perferendis esse? Ex est placeat sint nihil expedita alias voluptatibus ullam voluptatem adipisci maiores eum ratione dolore, voluptatum excepturi dolor, laboriosam deleniti tempore impedit sequi. Harum esse quidem optio, quos vero nihil inventore est odit voluptatum deserunt veritatis autem voluptatibus, minima fugit non repellat explicabo itaque eum commodi nisi aut? Aspernatur repellendus harum culpa consequuntur ut sit officiis qui a, reprehenderit sint, delectus tempore dignissimos repellat, expedita assumenda recusandae asperiores beatae architecto. Ducimus neque tempora doloremque reprehenderit culpa animi possimus earum quos veritatis delectus, est, voluptates fugiat ex dolorum laboriosam.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus est aspernatur error repudiandae dolorum soluta suscipit. Illo blanditiis nobis, accusamus...'}</p>
                                </div>
                                <button onClick={() => setReadMore1(!readMore1, setReadMore2(), setReadMore3())} className='btn mt-[-10px] ml-[-16px] lg:mt-[-20px]  text-green-500 btn-link'>{!readMore1 ? 'READ MORE' : 'Show less'}</button>
                            </div>
                        </div>
                    </div>

                    <div className=''
                        data-aos="zoom-in-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                    >
                        <img className=' lg:max-w-full' src={news2} alt="" />
                        <p></p>
                        <div className='flex justify-center'>
                            <div className=' lg:max-w-full'>
                                <h3 className='font-semibold my-2'>We know that buying shop</h3>
                                <div className='flex justify-center items-center lg:w-full'>
                                    <p className='text-[#ABABAB] text-justify'>{readMore2 ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi perferendis esse? Ex est placeat sint nihil expedita alias voluptatibus ullam voluptatem adipisci maiores eum ratione dolore, voluptatum excepturi dolor, laboriosam deleniti tempore impedit sequi. Harum esse quidem optio, quos vero nihil inventore est odit voluptatum deserunt veritatis autem voluptatibus, minima fugit non repellat explicabo itaque eum commodi nisi aut? Aspernatur repellendus harum culpa consequuntur ut sit officiis qui a, reprehenderit sint, delectus tempore dignissimos repellat, expedita assumenda recusandae asperiores beatae architecto. Ducimus neque tempora doloremque reprehenderit culpa animi possimus earum quos veritatis delectus, est, voluptates fugiat ex dolorum laboriosam.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus est aspernatur error repudiandae dolorum soluta suscipit. Illo blanditiis nobis, accusamus...'}</p>
                                </div>
                                <button onClick={() => setReadMore2(!readMore2, setReadMore1(), setReadMore3())} className='btn mt-[-10px] ml-[-16px] lg:mt-[-20px]  text-green-500 btn-link'>{!readMore2 ? 'READ MORE' : 'Show less'}</button>
                            </div>
                        </div>
                    </div>

                    <div className=''
                        data-aos="zoom-in-left"
                        data-aos-easing="linear"
                        data-aos-delay="700"
                        data-aos-duration="5000">

                        <img className='lg:max-w-full' src={news3} alt="" />
                        <p></p>
                        <div className='flex justify-center'>
                            <div className=' lg:max-w-full'>
                                <h3 className='font-semibold my-2'>We know that buying shop</h3>
                                <div className='flex justify-center items-center lg:w-full'>
                                    <p className='text-[#ABABAB] text-justify'>{readMore3 ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi perferendis esse? Ex est placeat sint nihil expedita alias voluptatibus ullam voluptatem adipisci maiores eum ratione dolore, voluptatum excepturi dolor, laboriosam deleniti tempore impedit sequi. Harum esse quidem optio, quos vero nihil inventore est odit voluptatum deserunt veritatis autem voluptatibus, minima fugit non repellat explicabo itaque eum commodi nisi aut? Aspernatur repellendus harum culpa consequuntur ut sit officiis qui a, reprehenderit sint, delectus tempore dignissimos repellat, expedita assumenda recusandae asperiores beatae architecto. Ducimus neque tempora doloremque reprehenderit culpa animi possimus earum quos veritatis delectus, est, voluptates fugiat ex dolorum laboriosam.' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus est aspernatur error repudiandae dolorum soluta suscipit. Illo blanditiis nobis, accusamus...'}</p>
                                </div>
                                <button onClick={() => setReadMore3(!readMore3, setReadMore1(), setReadMore2())} className='btn mt-[-10px] ml-[-16px] lg:mt-[-20px]  text-green-500 btn-link'>{!readMore3 ? 'READ MORE' : 'Show less'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurNews;