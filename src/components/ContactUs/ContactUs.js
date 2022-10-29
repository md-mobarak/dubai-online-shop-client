import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-[#002040] w-full lg:h-full lg:py-12 py-5'>
            <div className='flex justify-center items-center'>
                <h1 className='text-xl lg:text-4xl pb-4 uppercase lg:font-bold font-semibold text-green-400'>Contact us</h1>
            </div>
            <div className='flex justify-center items-center  '>
                <div className='border-4 rounded-xl border-green-400 px-5 py-3 lg:px-10 lg:py-6'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
                        <label htmlFor="" className='text-white lg:text-xl lg:font-semibold'>Name
                            <input type="text" placeholder="Name" className="input input-bordered input-primary border-green-300 w-full max-w-xs" />
                        </label>
                        <label htmlFor="" className='text-white lg:text-xl lg:font-semibold'>Phone
                            <input type="text" placeholder="Phone" className="input input-bordered input-primary border-green-300 w-full max-w-xs" />
                        </label>
                        <label htmlFor="" className='text-white lg:text-xl lg:font-semibold'>Email
                            <input type="text" placeholder="Email" className="input input-bordered input-primary w-full border-green-300 max-w-xs" />
                        </label>
                        <label htmlFor="" className='text-white lg:text-xl lg:font-semibold'>Address
                            <input type="text" placeholder="Address" className="input input-bordered input-primary border-green-300 w-full max-w-xs" />
                        </label>

                    </div>
                    <div className='lg:mt-6 lg:mb-4'>
                        <label htmlFor="" className='text-white lg:text-xl lg:font-semibold text-center '>Write Details
                            <textarea className="textarea border-1 border-green-300 textarea-primary w-full" placeholder="Product Details"></textarea>
                        </label>
                    </div>
                    <button className='btn btn-warning lg:font-semibold text-white border-0 bg-green-500 w-full'>SEND</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;