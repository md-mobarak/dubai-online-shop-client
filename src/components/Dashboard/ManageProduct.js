import { reverse } from 'lodash';
import React, { useEffect, useState } from 'react';
import ProductMG from './ProductMG';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dubai-online-shop-2-production.up.railway.app/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse())
            })
    }, [products])

    return (
        <div >
            <h1 className='text-center text-3xl my-4 font-bold'>Manage all Product</h1>
            <div className='flex justify-center items-center px-10'>
                <div className='grid lg:grid-cols-3 gap-4'>
                    {
                        products?.map(product =>
                            <ProductMG product={product} key={product._id}></ProductMG>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;