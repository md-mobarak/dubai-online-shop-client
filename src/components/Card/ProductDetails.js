import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';


const ProductDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [productDtl, setProductDtl] = useState({})
    const { name, image, price, description } = productDtl
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProductDtl(data);
            })
    }, [])
    const [toggle, setToggle] = useState(false)
    const [heart, setHeart] = useState(false)
    const handleHeart = () => {
        setHeart(!heart)
    }
    return (
        <div>
            <div className='w-full flex justify-center mt-10'>
                <div className="card card-compact w-96 bg-base-200 shadow-2xl">
                    <figure><img className='h-96 w-96' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">name{name}</h2>
                        <h2 className="card-title">Price{price}</h2>
                        <p>{description?.slice(0, 100)}</p>
                        <div className='flex items-center'>
                            <span className='ml-6'>5Likes</span>
                            <span className='ml-12'>3comments</span>
                            <span> </span>
                        </div>
                        <div className="flex justify-around items-center">
                            <button onClick={handleHeart}>
                                {
                                    !heart ?
                                        <FaRegHeart className='text-2xl text-[#2998EC] hover:text-[#2998EC] hover:pointer'></FaRegHeart>
                                        :
                                        <FaHeart className='text-2xl text-[#2998EC] hover:text-[#2998EC] '></FaHeart>
                                }
                            </button>


                            <button onClick={() => setToggle(!toggle)}
                                className='btn btn-sm bg-[#2998EC] text-white border-0'>Comments</button>
                            <button className="btn btn-sm bg-[#2998EC] text-white border-0">Buy Now</button>

                        </div>
                        {
                            toggle &&
                            <div>
                                <h1 className='text-center text-3xl font-bold'>hello dears</h1>
                                <button className='btn btn-sm btn-primary text-center' onClick={() => setToggle(false)}>Hide</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='lg:my-12 flex justify-center'>
                <button onClick={() => navigate(-1)}
                    className='btn btn-secondary bg-[#2998EC] w-full lg:text-2xl lg:w-[50%] text-white'>BACK HOME</button>
            </div>
        </div>
    );
};

export default ProductDetails;