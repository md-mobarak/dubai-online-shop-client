import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';


const ProductDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [productDtl, setProductDtl] = useState({})
    const { name, image, price, description, _id } = productDtl
    useEffect(() => {
        fetch(`https://dubai-online-shop-2-production.up.railway.app/product/${id}`)
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
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        reset()
    };
    return (
        <div className='lg:px-0 px-8'>
            <div className='w-full flex justify-center  my-10'>
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
                                        <FaRegHeart className='text-2xl text-green-500 hover:text-[#2998EC] hover:pointer'></FaRegHeart>
                                        :
                                        <FaHeart className='text-2xl text-green-500 hover:text-[#2998EC] '></FaHeart>
                                }
                            </button>


                            <button onClick={() => setToggle(!toggle)}
                                className='btn btn-sm bg-green-500 text-white border-0'>Comments</button>
                            <ReactWhatsapp number="+8801825639631" message={`Id:${_id} Name:${name} ImageURL:${image} `} >
                                <button className="btn btn-sm bg-green-500 text-white border-0">Buy Now

                                </button>
                            </ReactWhatsapp>

                        </div>
                        {
                            toggle &&
                            <div>
                                <h1 className='text-center text-xl font-bold'>Comments</h1>
                                <div>
                                    {/* all comments */}
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className=' flex justify-center'>
                                        <textarea className="textarea textarea-primary"
                                            {...register("comment", { required: true })}
                                            placeholder="Type your comment" cols="40" rows="1"></textarea>
                                        {/* errors will return when field validation fails  */}

                                    </div>
                                    <div className='flex justify-center'>
                                        {errors.comment && <span className='text-red-600 '>This field is required</span>}
                                    </div>
                                    <div className='w-full mt-3'>
                                        <button className='btn btn-xs w-full bg-[#DE04E6] font-bold text-white  btn-accent'>SEND</button>
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='lg:my-12 flex justify-center'>
                <button onClick={() => navigate(-1)}
                    className='btn btn-secondary bg-[#2998EC] border-0 w-full lg:text-2xl lg:w-[25%] text-white'>BACK HOME</button>
            </div>
        </div>
    );
};

export default ProductDetails;