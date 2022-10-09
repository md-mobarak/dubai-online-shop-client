import React from 'react';
import logo from '../asset/Google_Icons-09-512.webp'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
const Login = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    };
    if (user || Guser) {
        navigate('/')
    }
    const handleGoogle = () => {
        signInWithGoogle()
    }

    return (
        <div className=' flex justify-center items-center mt-10 lg:mt-27'>
            <div className='text-center login-form w-[80%] lg:w-[50%] lg:h-[50%] lg:py-8 py-10 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-xl lg:text-2xl font-bold text-white mt-7 lg:mb-[-30px]'>LOGIN</h1>
                    <section className='grid grid-cols-1 gap-4 lg:px-0 px-10 lg:pt-12'>

                        <div>
                            <p className='lg:my-0 mt-[-3px] text-xl font-semibold text-white'>Email</p>
                            <input type="text" placeholder="Email"
                                {...register("email", { required: true })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <p className='lg:my-0 mt-[-3px] text-xl font-semibold text-white'>Password</p>
                            <input type="text" placeholder="password"
                                {...register("password", { required: true })}
                                className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <button className='btn btn-accent bg-blue-700 md:w-[85%] lg:text-xl text-white mt-2 w-full lg:w-[65%]'>SUBMIT</button>
                        </div>
                    </section>
                </form>
                <div>
                    <button onClick={handleGoogle} className='btn btn-accent hover:text-white bg-white lg:text-xl  mt-2 w-[75%] lg:w-[65%]'>
                        <img className='w-6 h-6 md:lg:w-10 md:lg:h-10 md:lg:mr-3' src={logo} alt="" />
                        LOGIN WITH GOOGLE</button>
                    <Link to='/signup'>
                        <p className='font-semibold text-xs lg:text-xl text-white lg:font-semibold mt-2'>ARE YOU NOT REGISTERED?  PLEASE SIGNUP</p></Link>
                </div>
            </div >
        </div>
    );
};

export default Login;