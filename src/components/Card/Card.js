import React, { useEffect, useState } from 'react';
import Products from './Products';
import { slice } from 'lodash'
const Card = () => {
    const [products, setProducts] = useState([])
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(3)
    const initialPosts = slice(products, 0, index)
    useEffect(() => {
        fetch(`https://dubai-online-shop.onrender.com/product`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse())
            })
    }, [])
    const loadMore = () => {
        setIndex(index + 3)
        if (index >= products.length) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }
    return (
        <div >
            <div className='flex justify-center items-center'>
                <div className='lg:px-16 py-6 grid lg:grid-cols-3 gap-x-5 gap-y-8 md:grid-cols-2 md:gap-4 lg:gap-10 '>
                    {
                        initialPosts


                            .map(product =>
                                <Products product={product} key={product._id}></Products>)
                    }
                </div>
            </div>
            <div className='flex justify-center mt-4 mb-10'>
                {
                    isCompleted ?
                        <button onClick={loadMore} className='btn btn-disabled text-white bg-red-700 w-[50%] lg:w-72'>Loaded</button>
                        :
                        <button className='text-center btn btn-accent lg:w-72 w-[50%] text-white bg-[#DE04E6]' onClick={loadMore}>Show More</button>
                }

            </div>
        </div>
        // <div>

        // </div>
    );
};

export default Card;