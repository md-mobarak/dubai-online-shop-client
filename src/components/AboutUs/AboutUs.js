import React from 'react';
import './AboutUs.module.css'
import banner1 from '../asset/banner1-1.jpg'
import banner2 from '../asset/banner2.jpg'
import logo from '../asset/icon1.png'
import logo2 from '../asset/icon2.png'
import logo3 from '../asset/icon3.png'
import ReactWhatsapp from 'react-whatsapp';
import Location from './Location';
import { Helmet } from 'react-helmet';
const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>VAPELAND ABOUT US</title>
                <link rel="canonical" href="http://mysite.com/about" />
                <meta name="description" content="VAPELAND ABOUT US " />
            </Helmet>
            <div className='lg:px-20 px-10 mt-10 h-full shadow-xl lg:pb-14 lg:mb-32 mb-14'>
                <h1 className='uppercase text-center lg:text-4xl text-2xl font-semibold lg:font-bold mb-9 lg:my-10 text-[#011F48]'>About Us</h1>

                <div className='lg:flex   items-center w-full justify-center gap-x-10 '>
                    <img className='rounded-xl ' src={banner1} alt="" />
                    <h1 className='uppercase text-center lg:text-5xl text-xl font-semibold lg:font-bold text-[#011F48]'>Beyond a coworking <br /> space with Vapeland</h1>
                    <div></div>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-3 lg:mt-[-105px]'>
                    {/* <div></div> */}
                    <div></div>
                    <img className='rounded-xl' src={banner2} alt="" />
                    <div>
                        <p className='text-xl mt-4 text-justify lg:ml-10 text-[#011F48]'>It is a reputed electronic smoking wholesale and  retail company, Where we sell various kind of fruit flavored smoking devices and juices at wholesale and retail prices.We do home delivery  all overUAE and we have cash on delivery facility. <br />
                            <span className='text-red-500 font-bold'> Warning:-</span> <p className='font-semibold'> Our products  contain nicotine and it is an addicted chemical. <br /> So, purchase of our products by persons under the age of 21 is prohibited.</p> </p>

                        <ReactWhatsapp number="+971509378575" message='How can I help you sir?' >
                            <button className='btn bg-green-500 lg:ml-10 border-0 w-60 my-5 text-white'>CONTACT</button>
                        </ReactWhatsapp>



                    </div>

                </div>


            </div>
            <h1 className='text-[#011F48] uppercase text-center lg:text-5xl text-xl font-semibold lg:font-bold '>We are Dedicated to <br /> Help You</h1>
            <div className='px-10 mb-20  lg:pb-20 pb-8 '>
                <div className='lg:flex justify-evenly lg:my-14 '>
                    <div className='shadow-xl lg:p-10 p-5'>
                        <img src={logo} alt="" />
                        <button className='font-bold text-2xl text-[#011F48]'>Flexible Plans & Pricing</button>
                    </div>
                    <div className='my-16 lg:my-0 shadow-xl lg:p-10 p-5'>
                        <img src={logo2} alt="" />
                        <button className='font-bold text-2xl text-[#011F48]'>All-Inclusive Access</button>
                    </div>
                    <div className='shadow-xl lg:p-10 p-5'>
                        <img src={logo3} alt="" />
                        <button className='font-bold text-2xl text-[#011F48]'>
                            Personalized Support</button>
                    </div>
                </div>

            </div>
            <Location></Location>
        </div>
    );
};

export default AboutUs;