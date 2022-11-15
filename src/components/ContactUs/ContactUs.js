import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // publicKey = RqGNbuVhtUS2KDZHd
        // serviceId = service_kge9r8e
        // templateId = template_okbs2s2

        emailjs.sendForm('service_kge9r8e', 'template_okbs2s2', form.current, 'RqGNbuVhtUS2KDZHd')
            .then((result) => {
                console.log(result.text);
                toast.success("Wow! successfully send Your Message!")
            }, (error) => {
                console.log(error.text);
                toast.error("Try This again Letter!")
            });
        e.target.reset()
    };
    return (
        <div className='bg-[#002040] w-full lg:h-full lg:py-20 py-5'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>VAPELAND CONTACT US</title>
                <link rel="canonical" href="http://mysite.com/contactus" />
                <meta name="description" content="VAPELAND CONTACT US " />
            </Helmet>
            <div className='flex justify-center items-center'>
                <h1 className='text-xl lg:text-4xl pb-4 uppercase lg:font-bold font-semibold text-green-400'>Contact us</h1>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='flex justify-center items-center  '>
                    <div className='border-4 rounded-xl border-green-400 px-5 py-3 lg:px-10 lg:py-6'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
                            <label htmlFor="" className=' lg:text-xl text-white lg:font-semibold'>Name
                                <input name='user_name' type="text" required placeholder="Name" className="input input-bordered input-primary text-green-600  border-green-300 w-full max-w-xs" />
                            </label>
                            <label htmlFor="" className=' lg:text-xl text-white lg:font-semibold'>Phone
                                <input name='user_phone' type="number" required placeholder="Phone" className="input input-bordered input-primary text-green-600  border-green-300 w-full max-w-xs" />
                            </label>
                            <label htmlFor="" className='text-white lg:text-xl lg:font-semibold'>Email
                                <input name='user_email' type="email" required placeholder="Email" className="input input-bordered text-green-600  input-primary w-full border-green-300 max-w-xs" />
                            </label>
                            <label htmlFor="" className='text-white lg:text-xl lg:font-semibold'>Address
                                <input name='user_address' type="text" required placeholder="Address" className="input input-bordered text-green-600  input-primary border-green-300 w-full max-w-xs" />
                            </label>

                        </div>
                        <div className='lg:mt-6 lg:mb-4'>
                            <label htmlFor="" className='text-white lg:text-xl lg:font-semibold text-center '>Write Details
                                <textarea name='user_message' required className="text-green-600 text-xl textarea border-1 border-green-300 textarea-primary w-full" placeholder="Product Details"></textarea>
                            </label>
                        </div>
                        <button type='submit' className='btn btn-warning lg:font-semibold text-white border-0 bg-green-500 w-full'>SEND</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;