import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';


const Products = ({ product }) => {
    const navigate = useNavigate()
    const [productComment, setProductComment] = useState([])
    const { name, image, price, description, _id } = product
    const [heart, setHeart] = useState(false)
    const handleHeart = (id) => {
        setHeart(!heart)
        navigate(`/product/${id}`)
    }
    // get comments of product 
    useEffect(() => {
        fetch(`https://dubai-online-shop-2.vercel.app/comment`)
            .then(res => res.json())
            .then(data => {
                setProductComment(data?.reverse())
            })
    }, [productComment])
    const filterComments = productComment?.filter(c => _id === c.product_id)
    return (
        <div data-aos="zoom-in"
            data-aos-duration="2000"
            className="card card-compact lg:w-96 w-full  bg-base-100 shadow-2xl">
            <figure><img className='h-64 w-full ' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Price ${price}</h2>
                <p title={description}>Description: {description?.slice(0, 100)}</p>
                <div className='flex items-center'>
                    <span className='ml-6'>Rating</span>
                    <span className='ml-12'>comments  {filterComments?.length ? filterComments.length : 0}</span>
                    <span> </span>
                </div>
                <div className="flex justify-around items-center">
                    <button onClick={() => handleHeart(_id)}>
                        <FaHeart className='text-2xl text-green-500 hover:text-[#2998EC] '></FaHeart>

                    </button>
                    <button onClick={() => handleHeart(_id)}
                        className='btn btn-sm bg-green-500 text-white border-0'>Comments</button>
                    <ReactWhatsapp number="+971 50 937 8575" message={`Id:${_id} Name:${name} ImageURL:${image} `} >
                        <button className="btn btn-sm bg-green-500 text-white border-0">Buy Now

                        </button>
                    </ReactWhatsapp>


                </div>

            </div>
        </div>
    );
};

export default Products;