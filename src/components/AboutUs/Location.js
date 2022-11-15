import React from 'react';
import { TfiEmail } from 'react-icons/tfi'
import { BsWhatsapp } from 'react-icons/bs'
import { MdLocationOff } from 'react-icons/md'
const Location = () => {
    return (
        <div className='bg-[#011F48] lg:py-10 py-10'>
            <h1 className='border-bottom-4 border-white text-white uppercase text-center lg:text-5xl text-xl font-semibold lg:font-bold '>Location</h1>
            <div className='lg:flex justify-evenly items-center lg:px-0 px-10 lg:mt-10 mt-4'>
                <div className='flex items-center'>
                    <MdLocationOff className='lg:text-6xl text-xl text-white'></MdLocationOff>
                    <p className='lg:text-2xl text-white ml-4'>Our location: Dubai Business bay</p>
                </div>
                <div className='flex items-center'>
                    <TfiEmail className='lg:text-6xl text-white'> </TfiEmail>
                    <p className='lg:text-2xl text-white ml-4'>Email:Vapelanduae575@gmail.com</p>
                </div>
                <div className='flex items-center'>
                    <BsWhatsapp className='lg:text-6xl text-white'></BsWhatsapp>
                    <p className='lg:text-2xl text-white ml-4'> Whatsapp:+971509378575</p>
                </div>
            </div>
            <p className='text-center text-xl font-semibold text-white uppercase mt-10'>© 2022 Mobarak. All rights reserved.</p>
        </div>
    );
};

export default Location;