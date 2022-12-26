import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Products from '../Card/Products';
import { BsFilterSquare } from 'react-icons/bs'
import { Helmet } from 'react-helmet';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import OurNews from './OurNews';
import MapLocation from './MapLocation';


const Home = () => {
    const navigate = useNavigate()
    const pathName = useLocation()
    const [products, setProducts] = useState([])
    const [productFilter, setProductFilter] = useState(products)
    const [isProduct, setIsProduct] = useState([])
    const [toggle, setToggle] = useState(false)
    const [button, SetButton] = useState(true)

    useEffect(() => {
        fetch('https://dubai-online-shop-2.vercel.app/product')
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
    if (!products) {
        return <h1 className='text-center text-3xl font-bold'>Loading...</h1>
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>VAPELAND</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="VAPELAND" />
            </Helmet>

            <Banner></Banner>

            <h1 className='text-center text-[#011F48] lg:mt-5 font-bold text-xl lg:text-4xl text-plum plate'>VAPE STORE</h1>

            <div >
                <div className='flex justify-end lg:px-32'>
                    <button onClick={() => setToggle(!toggle, navigate('/'))} className='lg:text-3xl font-bold'><BsFilterSquare className={toggle ? 'text-green-500' : ''}></BsFilterSquare></button>
                    <button onClick={() => reloadPage()} className='lg:text-3xl px-3 pr-5 font-semibold'>All</button>
                </div>

                {
                    toggle &&
                    <div className='flex justify-end lg:pr-32 pr-3'>
                        <ul>
                            <li onClick={() => filterProduct('Device',)} className='lg:text-xl cursor-pointer hover:text-green-600 hover:font-semibold'>Device</li>
                            <li onClick={() => filterProduct('Juice')} className='lg:text-xl cursor-pointer hover:text-green-600 hover:font-semibold'>Juice</li>
                            <li onClick={() => filterProduct('Disposible')} className='lg:text-xl cursor-pointer hover:text-green-600 hover:font-semibold'>Disposible</li>
                            <li onClick={() => filterProduct('Heets')} className='lg:text-xl cursor-pointer hover:text-green-600 hover:font-semibold'>Heets</li>
                            <li onClick={() => filterProduct('Iqos device')} className='lg:text-xl cursor-pointer hover:text-green-600 hover:font-semibold'>Iqos device</li>
                            <li onClick={() => filterProduct('Accosorice')} className='lg:text-xl cursor-pointer hover:text-green-600 hover:font-semibold'>Accosorice</li>
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
                        pathName.pathname === '/loadmore' ? '' : productFilter && products?.slice(0, 6).map(product =>
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
            <div className='lg:my-16 my-10'>
                <ChooseUs></ChooseUs>
            </div>
            <div>
                <OurNews></OurNews>
            </div>
            <div>
                <MapLocation></MapLocation>
            </div>
        </div >
    );
};

export default Home;