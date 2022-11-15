import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditDetail = () => {
    const { id } = useParams()
    const [productDetails, setProductDetails] = useState({})
    const { _id } = productDetails
    // console.log(productDetails);
    useEffect(() => {
        fetch(`https://dubai-online-shop-2-production.up.railway.app/editDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setProductDetails(data)
                // console.log(data);
            })
    }, [productDetails])


    const [imageURL, setImageURL] = useState('')
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const product = {
            ...data,
            image: imageURL,
        }
        const res = await axios.put(`https://dubai-online-shop-2-production.up.railway.app/editProduct/${_id}`, product)
        reset()
        const sureMessage = res.status === 200
        if (sureMessage) {
            toast.success('Your product is Edit!!')
        }
    };


    // componentDidMount() {
    //     // PUT request using axios with set headers
    //     const article = { title: 'React PUT Request Example' };
    //     const headers = { 
    //         'Authorization': 'Bearer my-token',
    //         'My-Custom-Header': 'foobar'
    //     };
    //     axios.put('https://reqres.in/api/articles/1', article, { headers })
    //         .then(response => this.setState({ updatedAt: response.data.updatedAt }));
    // }



    const handleSubmitImage = (e) => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.append("image", image)
        axios.post('https://api.imgbb.com/1/upload?key=13ac64a50e615cb2aadefb6ca184b4ae', formData)
            .then((res) => {
                setImageURL(res.data.data.display_url)
            }).catch((error) => {
                console.log(error);
            })
    }


    return (
        <div className='lg:flex justify-evenly items-center lg:my-20  px-6 lg:px-0'>
            <div className='border-4 lg:w-96 bg-green-200 rounded-xl border-blue-400 px-4'>
                <h1 className='text-center text-3xl font-bold'>Edit Detail</h1>
                <img className='w-96 h-72 rounded-xl' src={productDetails.image} alt="" />
                <h1 className='text-3xl font-bold'>{productDetails.name}</h1>
                <p className='text-xl font-bold'>Price ${productDetails.price}</p>
                <p>{productDetails.description}</p>
            </div>
            <div className='lg:my-0 my-10'>
                <form onSubmit={handleSubmit(onSubmit)}
                    className='flex justify-center  items-center '>
                    <div className='grid grid-cols-1 w-96  px-4 py-6 shadow-2xl
                rounded-xl 
                bg-blue-200'>
                        <p className='font-semibold text-center text-2xl'>Name</p>

                        <input type="text" placeholder="Product Name"
                            {...register("name", { required: "Name Address is required" })}
                            aria-invalid={errors.name ? "true" : "false"}
                            className="input input-bordered input-accent shadow-lg " />


                        {errors.name?.type === 'required' && <p className='text-red-500 text-center' role="alert">name is required</p>}


                        <p className='font-semibold text-center text-2xl'>price</p>
                        <input type="number" placeholder="Type Price"
                            {...register("price", { required: "price is required" })}
                            aria-invalid={errors.price ? "true" : "false"}
                            className="input input-bordered input-accent shadow-lg" />

                        {errors.price?.type === 'required' && <p className='text-red-500 text-center' role="alert">price required</p>}

                        <p className='font-semibold text-center text-2xl'>Category</p>
                        <select className="input input-bordered input-accent shadow-lg"  {...register("category", { required: "Category is required" })}
                            aria-invalid={errors.category ? "true" : "false"}>
                            <option value="Device">Device</option>
                            <option value="Juice">Juice</option>
                            <option value="Disposible">Disposible</option>
                            <option value="Heets"> Heets</option>
                            <option value="Iqos device"> Iqos device</option>
                            <option value="Accosorice"> Accosorice</option>
                        </select>
                        {errors.category?.type === 'required' && <p className='text-red-500 text-center' role="alert">Category is required</p>}

                        <p className='font-semibold text-center text-2xl'>Description</p>
                        <textarea className="textarea textarea-accent shadow-lg"
                            {...register("description", { required: "Description is required" })}
                            aria-invalid={errors.description ? "true" : "false"}
                            placeholder="Description"></textarea>

                        {errors.description?.type === 'required' && <p className='text-red-500 text-center' role="alert">description required</p>}

                        <p className='font-semibold text-center text-2xl'>Image</p>
                        <input onChange={handleSubmitImage} type="file" placeholder="Image"
                            className="input input-bordered input-accent mb-8 shadow-lg" />

                        <button className='btn border-0 text-white bg-blue-500'>SUBMIT</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditDetail;