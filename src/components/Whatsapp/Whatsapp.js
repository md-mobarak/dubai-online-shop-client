import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import icon from './whatsapp.svg'
const Whatsapp = () => {
    return (
        <div>

            {/* <img className='w-20 h-20' src={icon} alt="" /> */}
            <ReactWhatsapp className='' number="+8801825639631" message="Hello World!!!" >
                <img className='lg:w-40  lg:h-40 w-20 h-20' src={icon} alt="" />
            </ReactWhatsapp>

        </div>
    );
};

export default Whatsapp;