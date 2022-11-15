import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import logo from '../asset/Google_Icons-09-512.webp'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useHook from '../useHook/useHook';
import useAdmin from '../useHook/useAdmin';
const Signup = () => {

    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password)
        reset()
    };

    const handleGoogle = () => {
        signInWithGoogle()
    }
    const [token] = useHook(user || gUser)
    // const [admin] = useAdmin(user || gUser)
    if (loading || gLoading) {
        return <h1>Loading...</h1>
    }
    if (token) {
        return navigate(from, { replace: true });
    }

    return (
        <div className=' flex justify-center items-center mt-10 lg:mt-27 mb-10'>
            <div className='text-center bg-green-300 w-[80%] lg:w-[50%] lg:h-[50%] lg:py-8 py-10 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-xl lg:text-2xl font-bold  mt-7 lg:mb-[-30px]'>SIGNUP</h1>
                    <section className='grid grid-cols-1 gap-4 lg:px-0 px-10 lg:pt-12'>
                        <div>
                            <p className='my-0 text-xl font-semibold '>Name</p>
                            <input type="text" placeholder="Name"
                                {...register("name", { required: true })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors && <p>{errors.name?.message}</p>}
                        </div>
                        <div>
                            <p className='lg:my-0 mt-[-3px] text-xl font-semibold '>Email</p>
                            <input type="text" placeholder="Email"
                                {...register("email", { required: true })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors && <p>{errors.email?.message}</p>}
                        </div>
                        <div>
                            <p className='lg:my-0 mt-[-3px] text-xl font-semibold '>Password</p>
                            <input type="text" placeholder="password"
                                {...register("password", { required: true })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors && <p>{errors.password?.message}</p>}
                        </div>
                        <div>
                            <button className='btn btn-accent md:w-[85%] bg-green-600 border-0 lg:text-xl text-white mt-2 w-full lg:w-[65%]'>SUBMIT</button>
                        </div>
                    </section>
                </form>
                <div>
                    <button onClick={handleGoogle} className='btn btn-accent hover:text-white bg-white lg:text-xl  mt-2 w-[75%] lg:w-[65%]'>
                        <img className='w-6 h-6 md:lg:w-10 md:lg:h-10 md:lg:mr-3' src={logo} alt="" />
                        LOGIN WITH GOOGLE</button>
                    <Link to='/login'>
                        <p className='font-semibold text-xs lg:text-xl  lg:font-semibold mt-2'>ARE YOU REGISTERED?  PLEASE LOGIN</p>
                    </Link>
                </div>
            </div >
        </div>
    );
};

export default Signup;