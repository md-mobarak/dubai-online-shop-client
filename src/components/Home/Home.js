import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Products from '../Card/Products';
import { BsFilterSquare } from 'react-icons/bs'
import { Helmet } from 'react-helmet';


const Home = () => {
    const navigate = useNavigate()
    const pathName = useLocation()
    const [products, setProducts] = useState([])
    const [productFilter, setProductFilter] = useState(products)
    const [isProduct, setIsProduct] = useState([])
    const [toggle, setToggle] = useState(false)
    const [button, SetButton] = useState(true)

    useEffect(() => {
        fetch('https://dubai-online-shop-2-production.up.railway.app/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse())
            })
    }, [])

    const filterProduct = (filter) => {

        const allProductFilter = products.filter(elm => elm?.category === filter)
        setIsProduct(allProductFilter)
        SetButton(!button)
        setProductFilter()

        setToggle()
    }
    const reloadPage = () => {
        navigate('/')
        window.location.reload(false)
        SetButton(button)
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>VAPELAND</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="VAPELAND" />
            </Helmet>
            <h1 className='text-green-300 text-xl lg:text-4xl font-bold'>
                <marquee scrollamount='10'>Cash on Delivery | Free Delivery on orders 300AED+</marquee>
            </h1>
            <h1 className='text-center  font-bold text-xl lg:text-4xl text-plum plate'>OUR PRODUCTS</h1>

            <div >
                <div className='flex justify-end lg:px-32'>
                    <button onClick={() => setToggle(!toggle, navigate('/'))} className='lg:text-3xl font-bold'><BsFilterSquare className={toggle ? 'text-green-500' : ''}></BsFilterSquare></button>
                    <button onClick={() => reloadPage()} className='lg:text-3xl px-3 pr-5 font-semibold'>All</button>
                </div>

                {
                    toggle &&
                    <div className='flex justify-end lg:pr-32 pr-3'>
                        <ul>
                            <li onClick={() => filterProduct('Device',)} className='lg:text-xl cursor-pointer'>Device</li>
                            <li onClick={() => filterProduct('Juice')} className='lg:text-xl cursor-pointer'>Juice</li>
                            <li onClick={() => filterProduct('Disposible')} className='lg:text-xl cursor-pointer'>Disposible</li>
                            <li onClick={() => filterProduct('Heets')} className='lg:text-xl cursor-pointer'>Heets</li>
                            <li onClick={() => filterProduct('Iqos device')} className='lg:text-xl cursor-pointer'>Iqos device</li>
                            <li onClick={() => filterProduct('Accosorice')} className='lg:text-xl cursor-pointer'>Accosorice</li>
                        </ul>
                    </div>
                }
            </div>

            <div className='lg:px-16 px-10 py-3 grid lg:grid-cols-3 gap-x-5 gap-y-8 md:grid-cols-2 md:gap-4 lg:gap-10 '>
                {
                    pathName.pathname === '/loadmore' ? '' : isProduct?.slice(0, 3).map(product =>
                        <Products product={product} key={product._id}></Products>)
                }
            </div>

            <div>
                <div className='lg:px-16 px-10 py-3 grid lg:grid-cols-3 gap-x-5 gap-y-8 md:grid-cols-2 md:gap-4 lg:gap-10 '>
                    {
                        pathName.pathname === '/loadmore' ? '' : productFilter && products?.slice(0, 3).map(product =>
                            <Products product={product} key={product._id}></Products>)
                    }
                </div>
            </div>

            <Outlet />

            {
                button && <div className='flex justify-center mt-4 mb-10'>
                    {pathName.pathname === '/loadmore' ? '' :
                        <button className='text-center btn btn-accent lg:w-72 w-[50%] text-white bg-green-500' onClick={() => navigate('/loadmore')}>Show More</button>
                    }
                </div>
            }
        </div >
    );
};

export default Home;