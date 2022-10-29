import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';


const Products = ({ product }) => {

    const navigate = useNavigate()
    const { name, image, price, description, _id } = product
    const [heart, setHeart] = useState(false)
    const handleHeart = (id) => {
        setHeart(!heart)
        navigate(`/product/${id}`)
    }
    return (
        <div className="card card-compact w-96 bg-base-200 shadow-2xl">
            <figure><img className='h-64 w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{price}</h2>
                <p>{description?.slice(0, 100)}</p>
                <div className='flex items-center'>
                    <span className='ml-6'>Rating</span>
                    <span className='ml-12'>3comments</span>
                    <span> </span>
                </div>
                <div className="flex justify-around items-center">
                    <button onClick={() => handleHeart(_id)}>
                        <FaRegHeart className='text-2xl text-green-500 hover:text-[#2998EC] hover:pointer'></FaRegHeart>
                        {/* <FaHeart className='text-2xl text-[#2998EC] hover:text-[#2998EC] '></FaHeart> */}
                    </button>


                    <button onClick={() => handleHeart(_id)}
                        className='btn btn-sm bg-green-500 text-white border-0'>Comments</button>
                    <ReactWhatsapp number="+8801825639631" message='please provide your product name or Id' >
                        <button className="btn btn-sm bg-green-500 text-white border-0">Buy Now

                        </button>
                    </ReactWhatsapp>


                </div>
                {/* {
                    toggle &&
                    <div>
                        <h1 className='text-center text-3xl font-bold'>hello dears</h1>
                        <button className='btn btn-sm btn-primary text-center' onClick={() => setToggle(false)}>Hide</button>
                    </div>
                } */}
            </div>
        </div>
    );
};

export default Products;