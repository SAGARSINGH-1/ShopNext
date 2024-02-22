import React, { useEffect } from 'react'
import { IoNotificationsCircleOutline } from 'react-icons/io5'
import { FaRegUserCircle } from "react-icons/fa";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const user = useSelector(state => state.auth.userData)
    useEffect(() => {
        console.log(user);
    },[user])
    function moved() {
    }
    return (
        <nav className='flex justify-between items-center bg-white p-3 py-2 border-b-2 border-gray-300'>
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
                <IoNotificationsCircleOutline className='mt-1 text-3xl text-gray-500' />
                <TfiShoppingCartFull className="mt-1 text-3xl" />
                <FaRegUserCircle onClick={moved} className='mt-1 text-4xl' />
            </div>
        </nav>
    )
}

export default Navbar