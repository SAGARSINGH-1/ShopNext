import React from 'react'
import { IoNotificationsCircleOutline } from 'react-icons/io5'
import { FaRegUserCircle } from "react-icons/fa";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { Link } from 'react-router-dom';

function Navbar() {
    function moved() {
    }
    return (
        <nav className='flex justify-between items-center bg-white p-3 py-2 border-b-2 border-gray-300'>
            <div className='flex items-center gap-10'>
                <div>
                    <Link to={"/"}>
                    <img src="https://static.vecteezy.com/system/resources/previews/000/616/943/original/vector-shopping-bag-icon.jpg" alt="" width={"50px"} /></Link>
                </div>
                <ul className='flex gap-6 font-medium cursor-pointer'>
                    <li className=''>Dashboard</li>
                    <li className=''>Trending</li>
                    <li className=''>Men</li>
                    <li className=''>Female</li>
                    <li className=''>Child</li>
                </ul>
            </div>
            <div className='flex gap-6 items-center cursor-pointer'>
                <IoNotificationsCircleOutline className='mt-1 text-3xl text-gray-500' />
                <TfiShoppingCartFull className="mt-1 text-3xl"/>
                <FaRegUserCircle onClick={moved} className='mt-1 text-4xl' />
            </div>
        </nav>
    )
}

export default Navbar