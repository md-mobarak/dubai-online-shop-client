import React, { useEffect, useState } from 'react';
import Products from './Products';
import { slice } from 'lodash'
import { useLocation, useNavigate } from 'react-router-dom';
const Card = () => {
    const [products, setProducts] = useState([])
    const pathName = useLocation()
    const navigate = useNavigate()
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(9)
    const initialPosts = slice(products, 0, index)
    useEffect(() => {
        fetch(`https://dubai-online-shop-2-production.up.railway.app/product`)
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
    if (!initialPosts.length) {
        return <h1 className='text-center mt-20 text-3xl font-bold'>loading...</h1>
    }

    return (
        <div >

            <div className='lg:px-16 px-10 py-3 grid lg:grid-cols-3 gap-x-5 gap-y-8 md:grid-cols-2 md:gap-4 lg:gap-10 '>
                {
                    initialPosts?.map(product =>
                        <Products product={product} key={product._id}></Products>)
                }
            </div>

            <div className='flex justify-center mt-4 mb-10'>

                {
                    pathName.pathname === '/' ? '' : isCompleted ?
                        <button onClick={loadMore} className='btn btn-disabled text-white bg-red-500 w-[50%] lg:w-72'>Loaded</button>
                        :
                        <button className='text-center btn btn-accent lg:w-72 w-[50%] text-white bg-green-500' onClick={loadMore}>Show More</button>
                }

            </div>
        </div>

    );
};

export default Card;