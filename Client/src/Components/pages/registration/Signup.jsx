import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../../../appwrite/auth';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Store/authSlice'; // Update with the correct path to your login action 

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = React.useState({ name: '', email: '', password: '', phone: '' });
    const [ID, setID] = React.useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');
        const phone = data.get('phone');

        const user = { name, email, password, phone };

        try {
            const res = await fetch("http://localhost:2000/api/user/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            // Check if server responded OK
            if (!res.ok) {
                toast.error("Error creating user1: " + res.statusText.message); // Show error message
            }

            const resData = await res.json();   // <-- parse JSON normally if success
            toast.success("Account created successfully!");
            navigate('/login'); // Redirect to login page after successful signup
        } catch (error) {
            toast.error("Error creating user: " + error.message); // Show error message
        }
    }



    return (
        <div className='pt-7 mx-4'>
            {
                <div className="pb-24 pt-6 px-12 border md:border-0 md:shadow-none shadow-2xl">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://static.vecteezy.com/system/resources/previews/000/616/943/original/vector-shopping-bag-icon.jpg"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Create an account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Mobile Number
                                </label>
                                <div className="mt-2">
                                    <input type="tel" id="phone" name="phone" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' required />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have an account?
                            <Link
                                to="/login"
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Signup;
