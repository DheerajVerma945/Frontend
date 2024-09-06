import React, { useState } from 'react'
import authService from '../Appwrite/auth'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Logo from './Logo'
import Button from './Button'

function SignUp() {
    const navigate = useNavigate();
    cont[error, setError] = useState("");
    const dispatch = useDispatch();
    const [register, handleSubmit] = useForm();


    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userdata = await authService.getCurrentUser();
                if (userdata) {
                    dispatch(login(userdata));
                    navigate("/");
                }
            }

        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo />
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold'>
                Sign in to your account
            </h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Don&apos;t have any account?&nbsp;
                <Link to="/signup" className='font-medium text-primary transition-all duration-200 hover:underline' >Sign Up</Link>
            </p>

            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input
                        label="Full Name: "
                        placeholder="Enter you full name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter you email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be valid address",
                            }
                        })}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button type='submit' className='w-full'>
                        Create Account
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default SignUp
