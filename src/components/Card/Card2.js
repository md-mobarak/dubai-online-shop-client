import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Products from './Products';

const Card2 = () => {
    const [products, setProducts] = useState()
    const [toggle, setToggle] = useState(false)

    const navigate = useNavigate()
    // console.log(products);
    useEffect(() => {
        fetch('https://dubai-online-shop-2-production.up.railway.app/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse())
                console.log(data);
            })
    }, [])
    return (
        <div>
            <div className='lg:px-28 px-10  flex justify-end'>
                <h1 onClick={() => setToggle(!toggle, navigate('/'))} className='text-4xl font bold'>{toggle ? 'hello' : 'hello2'} </h1>
                {/* {toggle && <h1 className='text-4xl font bold'> hello2</h1>} */}
            </div>
            <div className='lg:px-16 px-10 py-6 grid lg:grid-cols-3 gap-x-5 gap-y-8 md:grid-cols-2 md:gap-4 lg:gap-10 '>
                {
                    products?.slice(0, 3).map(product =>
                        <Products product={product} key={product._id}></Products>)
                }
            </div>
            {/* <div className='flex justify-center mt-4 mb-10'>
                <button className='text-center btn btn-accent lg:w-72 w-[50%] text-white bg-green-500' onClick={() => navigate('/loadmore')}>Show More</button>
            </div> */}

        </div>
    );
};

export default Card2;