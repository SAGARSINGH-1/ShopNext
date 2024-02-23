import React, { useEffect } from 'react'
import { IoNotificationsCircleOutline } from 'react-icons/io5'
import { FaRegUserCircle } from "react-icons/fa";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { login } from '../Store/authSlice';
import { useNavigate } from 'react-router-dom';

function Navbar() {


    const notificationMessages = [
        "Woohoo! 🎉 Your order #1523 has been confirmed...",
        "Exclusive offer just for you! Use code... 🎁",
        "The item you've been waiting for is back in stock! 🛍️",
        "Hurry! Our Flash Sale is live now... ⚡",
        "Forgot something? There are items in your cart... 🛒",
        "Congratulations! You've earned... 🌟",
        "Celebrate your 1-year anniversary... 🎉",
    ];

    const user = useSelector(state => state.auth.userData)
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    useEffect(() => {
        authService.getAccount().then((res) => {
            dispatch(login(res));
        })
    }, [user])



    function moved() {
    }

    function logoutHandler() {
        authService.logout().then((res) => {
            dispatch(login(null));
            Navigate("/login");
        })
    }


    return (
        <nav className='flex justify-between items-center bg-white p-3 py-2 border-b-2 text-black border-gray-300'>
            <div className='flex items-center gap-10 relative'>
                <div>
                    <Link to={"/"}>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/616/943/original/vector-shopping-bag-icon.jpg" alt="logo" width={"50px"} /></Link>
                </div>

                {/* TODO: Implement responsiveness to mobile there is no links here */}
                <ul className='absolute py-2 m-0 md:p-0 md:static left-0 -mx-[0.7rem] px-2 md:m-0 top-[60px] bg-gray-200 md:bg-transparent z-20 md:z-0 md:top-0 flex gap-[1.2rem] md:gap-6 font-medium cursor-pointer'>
                    <Link to={"/home"}><li className=''>Dashboard</li></Link>
                    <Link to={"/home"}><li className=''>Trending</li></Link>
                    <Link to={"/mens"}><li className=''>Men</li></Link>
                    <Link to={"/women"}><li className=''>Female</li></Link>
                    <Link to={"/child"}><li className=''>Child</li></Link>
                </ul>
            </div>

            <div className='flex gap-6 items-center cursor-pointer'>

                <div className="dropdown dropdown-bottom">
                    <div tabIndex={1} role="button" className="btn btn-ghost rounded-btn"><div className='flex relative'>
                        <IoNotificationsCircleOutline className='mt-1 text-3xl text-gray-500' />
                        <div className="badge absolute right-[-25px]">3+</div>
                    </div>
                        <ul tabIndex={1} className="menu dropdown-content z-[1] shadow bg-base-100 h-[65vh] overflow-x-hidden rounded-box mt-4 font-bold w-[23rem] text-black bg-transparent backdrop-blur-sm backdrop-filter ">
                            {notificationMessages.map((message, index) => {
                                return <li className='border-b-2 border-black py-3 w-[100%] text-md font-bold hover:scale-105' key={index}>{message}</li>
                            })}
                            <li className='py-1 hover:scale-105 text-blue-300'>See more..</li>
                        </ul>
                    </div>
                </div>


                <TfiShoppingCartFull className="mt-1 ml-3 text-3xl" />

                {user ? (<div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">{<p className='font-bold '>Hey, <span className='text-indigo-500 text-lg'>{user.name}</span></p>}</div>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-44 mt-4 font-bold text-white">
                        <li><Link to={`account/${user.name}`}>Account</Link></li>
                        <li onClick={logoutHandler}><Link className='bg-indigo-500 hover:bg-indigo-600 rounded-xl'>Logout</Link></li>
                    </ul>
                </div>) : (<Link to={'/login'}><FaRegUserCircle className='mt-1 text-4xl' /></Link>)}
            </div>
        </nav >
    )
}

export default Navbar