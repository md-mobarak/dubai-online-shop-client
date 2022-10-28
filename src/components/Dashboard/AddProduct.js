import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddProduct.css'

const AddProduct = () => {
    const [imageURL, setImageURL] = useState('')
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            image: imageURL,
        }
        const res = await axios.post('https://dubai-online-shop.onrender.com/product', serviceData)
        reset()
        const sureMessage = res.status === 200
        if (sureMessage) {
            toast.success('Your product is upload!!')
        }
    };
    const handleSubmitImage = (e) => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.set("image", image)
        axios.post('https://api.imgbb.com/1/upload?key=13ac64a50e615cb2aadefb6ca184b4ae', formData)
            .then((res) => {
                setImageURL(res.data.data.display_url)
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='mt-10'>

            <h1 className='text-3xl text-center mb-3 uppercase font-bold'>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                className='flex justify-center  items-center '>
                <div className='grid grid-cols-1 w-96  px-4 py-6 shadow-2xl
                rounded-xl 
                bg-green-200'>
                    <p className='font-semibold text-center text-2xl'>Name</p>

                    <input type="text" placeholder="Product Name"
                        {...register("name", { required: "Name Address is required" })}
                        aria-invalid={errors.name ? "true" : "false"}
                        className="input input-bordered input-accent shadow-lg " />


                    {errors.name?.type === 'required' && <p className='text-red-500 text-center' role="alert">First name is required</p>}


                    <p className='font-semibold text-center text-2xl'>price</p>
                    <input type="number" placeholder="Type Price"
                        {...register("price", { required: "price is required" })}
                        aria-invalid={errors.price ? "true" : "false"}
                        className="input input-bordered input-accent shadow-lg" />

                    {errors.price?.type === 'required' && <p className='text-red-500 text-center' role="alert">price required</p>}

                    <p className='font-semibold text-center text-2xl'>Description</p>
                    <textarea className="textarea textarea-accent shadow-lg"
                        {...register("description", { required: "Description is required" })}
                        aria-invalid={errors.description ? "true" : "false"}
                        placeholder="Description"></textarea>

                    {errors.description?.type === 'required' && <p className='text-red-500 text-center' role="alert">description required</p>}

                    <p className='font-semibold text-center text-2xl'>Image</p>
                    <input onChange={handleSubmitImage} type="file" placeholder="Image"
                        // {...register("image", { required: "image is required" })}
                        // aria-invalid={errors.image ? "true" : "false"}
                        className="input input-bordered input-accent mb-8 shadow-lg" />

                    {/* {errors.image?.type === 'required' && <p className='text-red-500 text-center' role="alert">Image is required</p>} */}

                    <button className='btn bg-green-500 text-white border-0'>SUBMIT</button>
                </div>

            </form>

        </div>
    );
};

export default AddProduct;