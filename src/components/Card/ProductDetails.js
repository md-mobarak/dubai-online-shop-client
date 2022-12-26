import axios from 'axios';
import { comment } from 'postcss';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReactWhatsapp from 'react-whatsapp';
import auth from '../../firebase.init';


const ProductDetails = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const { id } = useParams()
    const [productDtl, setProductDtl] = useState({})
    const [productComment, setProductComment] = useState([])
    const { name, image, price, description, _id } = productDtl
    useEffect(() => {
        fetch(`https://dubai-online-shop-2.vercel.app/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProductDtl(data);
            })
    }, [productDtl])
    const [toggle, setToggle] = useState(false)
    const [heart, setHeart] = useState(false)
    const handleHeart = () => {
        setHeart(!heart)
    }

    // post comments of product 
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const email = user.email
        const product_id = _id
        const comment = {
            ...data,
            product_id,
            email
        }
        const res = await axios.post('https://dubai-online-shop-2.vercel.app/comment', comment)
        reset()
        const sureMessage = res.status === 200
        if (sureMessage) {
            toast.success('Success')
        }
        reset()
    };


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
        <div>
            <div className='lg:px-0 px-8'>
                <div className='w-full flex justify-center  my-10'>
                    <div className="card card-compact w-96 bg-base-200 shadow-2xl">
                        <figure><img className='h-96 w-96' src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">name{name}</h2>
                            <h2 className="card-title">Price{price}</h2>
                            <p>{description?.slice(0, 100)}</p>
                            <div className='flex items-center'>
                                <span className='lg:ml-6 ml-3'>5Likes</span>
                                <span className='lg:ml-12 ml-6'>comments  {filterComments?.length ? filterComments.length : 0}</span>
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
                                <ReactWhatsapp number="+971 50 937 8575" message={`Id:${_id} Name:${name} ImageURL:${image} `} >
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
                                            <textarea className="textarea textarea-primary border border-green-500"
                                                {...register("comment", { required: true })}
                                                placeholder="Type your comment" cols="40" rows="1"></textarea>
                                            {/* errors will return when field validation fails  */}

                                        </div>
                                        <div className='flex justify-center'>
                                            {errors.comment && <span className='text-red-600 '>This field is required</span>}
                                        </div>
                                        <div className='w-full mt-3'>
                                            <button className='btn btn-xs w-full bg-green-500 font-bold text-white  btn-accent'>SEND</button>
                                        </div>
                                    </form>
                                </div>
                            }
                        </div>
                    </div>

                </div>
                <div className=' flex justify-center'>
                    <div className='lg:w-[20%] w-full'>
                        {
                            toggle && filterComments?.map(comment => <div key={comment._id}>
                                <div className=' border border-green-500'>
                                    <form className='w-[50%]'>
                                        <p className='text-center p-3'>{comment.comment} <br /> <span className='disable text-blue-500 uppercase'>{comment?.email?.slice(0, 10)
                                        }</span></p>
                                    </form>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <div className='lg:my-12 my-5 flex justify-center'>
                <button onClick={() => navigate(-1)}
                    className='btn btn-secondary bg-[#2998EC] border-0 w-full lg:text-2xl lg:w-[25%] text-white'>BACK HOME</button>
            </div>
        </div>
    );
};

export default ProductDetails;