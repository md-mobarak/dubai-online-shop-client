import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductMG = ({ product }) => {
    const navigate = useNavigate()
    const handleDelete = () => {
        const id = product._id

        if (id) {
            fetch(`https://dubai-online-shop-2.vercel.app/product/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const acknowledged = data.acknowledged === true
                    if (acknowledged) {
                        toast.success('Your product is Delete!!')
                    }
                })
        }

    }



    return (
        <div className="card card-compact w-74 bg-base-200 shadow-2xl">
            <figure><img className='h-64 w-full' src={product.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <h2 className="card-title">price</h2>
                <p></p>
                <div className="flex justify-evenly items-center ">
                    <button onClick={handleDelete} className='btn btn-sm btn-primary mr-3 ml-2 w-40'>DELETE</button>
                    <button onClick={() => navigate(`/dashboard/editDetails/${product._id}`)} className='btn btn-sm bg-green-500 border-0 text-black hover:text-white ml-3 mr-2  w-40'>EDIT</button>
                </div>
            </div>
        </div>
    );
};

export default ProductMG;