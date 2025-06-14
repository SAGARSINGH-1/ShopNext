import React from 'react'
import { Link, redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../Store/authSlice'; // Update with the correct path to your login action
import authService from '../../../appwrite/auth';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader, setLoader] = React.useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoader(true);
        const data = new FormData(event.target);
        const email = data.get('email');
        const password = data.get('password');

        const user = { email, password };

        try {
            const res = await fetch("http://localhost:2000/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(user),
            });

            // Check if server responded OK
            if (!res.ok) {
                toast.error("Invalid email or password"); // Show error message
            } else {
                const resData = await res.json();   // <-- parse JSON normally if success
                navigate('/profile');
                toast.success("Login successful!");
                setLoader(false);
            }

        } catch (error) {
            console.log(error);

        }
        setLoader(false);
    }
    return (
        <div className='pt-7 mx-4'>
            {
                loader ? (
                    <div className='flex justify-center items-center h-[70vh]'>
                        <span className="loading loading-spinner text-black loading-lg"></span>
                    </div>
                ) : (
                    <div className='pb-24 pt-6 px-12 border md:border-0 md:shadow-none shadow-2xl'>
                        <div className="mx-auto w-full md:max-w-sm">
                            <img className="mx-auto h-10 w-auto" src="https://static.vecteezy.com/system/resources/previews/000/616/943/original/vector-shopping-bag-icon.jpg" alt="Your Company" />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                        </div>

                        <div className="mt-10 mx-auto w-full max-w-sm">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div className="mt-2">
                                        <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                        <div className="text-sm">
                                            <Link to={"#"} className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Not a member?
                                <Link to={"/signup"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">register now</Link>
                            </p>
                        </div>
                    </div >
                )
            }

        </div >
    )
}

export default Login