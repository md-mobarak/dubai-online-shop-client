import React from 'react';
import Choose from '../../components/asset/Screenshot_1.png'
const ChooseUs = () => {
    return (
        <div>
            <h1 className='text-center text-[#011F48] font-bold lg:text-5xl text-3xl lg:mt-20 mt-10 uppercase'>Why Choose Us</h1>
            <p className='text-center text-[#011F48] lg:text-2xl font-semibold lg:mb-2 mb-10 mt-3 lg:mt-5'>Arcu non odio euismod lacinia sectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16 lg:px-20 px-10'>
                <div>
                    <img className='rounded-2xl lg:h-[700px]' src={Choose} alt="" />
                </div>
                <div className='py-20 px-10'>

                    <h1 className='text-4xl font-bold text-center text-[#011F48] '>Lorem, ipsum dolor sit amet consectetur.</h1>

                    <p className='text-justify my-10 text-2xl text-[#011F48]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus maxime ipsum cum, eos ipsa recusandae explicabo harum blanditiis illum quae beatae voluptatum accusamus, libero, eum architecto corrupti! A voluptatum nulla iure suscipit voluptates saepe facere ducimus, praesentium tenetur repellat velit ea et mollitia voluptatibus, accusantium ipsa sed corporis nisi repudiandae.</p>

                </div>
            </div>
        </div>
    );
};

export default ChooseUs;