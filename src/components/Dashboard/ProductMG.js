import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductMG = ({ product }) => {
    const navigate = useNavigate()
    const handleDelete = () => {
        const id = product._id

        const proceed = window.alert('Are you sure?')

        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

            })

    }



    return (
        <div className="card card-compact w-74 bg-base-200 shadow-2xl">
            <figure><img className='h-64 w-full' src={product.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <h2 className="card-title">price</h2>
                <p></p>
                <div className="flex justify-evenly items-center">
                    <button onClick={handleDelete} className='btn btn-primary mr-3 ml-2 w-40'>DELETE</button>
                    <button onClick={() => navigate(`/dashboard/editDetails/${product._id}`)} className='btn btn-secondary ml-3 mr-2  w-40'>EDIT</button>
                </div>
            </div>
        </div>
    );
};

export default ProductMG;