import React from 'react';
import Card from '../Card/Card';
import Whatsapp from '../Whatsapp/Whatsapp';


const Home = () => {
    return (
        <div>
            <h1 className='text-green-300 text-xl lg:text-4xl font-bold'>
                <marquee scrollamount='10'>Cash on Delivery | Free Delivery on orders 300AED+</marquee>
            </h1>
            <h1 className='text-center  font-bold text-xl lg:text-4xl text-plum plate'>OUR PRODUCTS</h1>
            <Card></Card>
        </div>
    );
};

export default Home;